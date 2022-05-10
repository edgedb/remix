"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.select = exports.$existingScopes = exports.$selectify = exports.delete = exports.$handleModifiers = exports.is = exports.EMPTY_LAST = exports.EMPTY_FIRST = exports.DESC = exports.ASC = void 0;
const edgedb_1 = require("edgedb");
const reflection_1 = require("edgedb/dist/reflection");
const path_1 = require("./path");
const literal_1 = require("./literal");
const __spec__1 = require("../__spec__");
const castMaps_1 = require("../castMaps");
exports.ASC = "ASC";
exports.DESC = "DESC";
exports.EMPTY_FIRST = "EMPTY FIRST";
exports.EMPTY_LAST = "EMPTY LAST";
function is(expr, shape) {
    const mappedShape = {};
    for (const [key, value] of Object.entries(shape)) {
        mappedShape[key] = {
            __kind__: reflection_1.ExpressionKind.PolyShapeElement,
            __polyType__: expr,
            __shapeElement__: value,
        };
    }
    return mappedShape;
}
exports.is = is;
function computeFilterCardinality(expr, cardinality, base) {
    var _a, _b, _c;
    let card = cardinality;
    const filter = expr;
    const baseIsObjectExpr = ((_a = base === null || base === void 0 ? void 0 : base.__element__) === null || _a === void 0 ? void 0 : _a.__kind__) === reflection_1.TypeKind.object;
    const filterExprIsEq = filter.__kind__ === reflection_1.ExpressionKind.Operator && filter.__name__ === "=";
    const arg0 = (_b = filter === null || filter === void 0 ? void 0 : filter.__args__) === null || _b === void 0 ? void 0 : _b[0];
    const arg1 = (_c = filter === null || filter === void 0 ? void 0 : filter.__args__) === null || _c === void 0 ? void 0 : _c[1];
    const argsExist = !!arg0 && !!arg1 && !!arg1.__cardinality__;
    const arg0IsUnique = (arg0 === null || arg0 === void 0 ? void 0 : arg0.__exclusive__) === true;
    if (baseIsObjectExpr && filterExprIsEq && argsExist && arg0IsUnique) {
        const newCard = arg1.__cardinality__ === reflection_1.Cardinality.One ||
            arg1.__cardinality__ === reflection_1.Cardinality.AtMostOne
            ? reflection_1.Cardinality.AtMostOne
            : arg1.__cardinality__ === reflection_1.Cardinality.Empty
                ? reflection_1.Cardinality.Empty
                : cardinality;
        if (arg0.__kind__ === reflection_1.ExpressionKind.PathLeaf) {
            const arg0ParentMatchesBase = arg0.__parent__.type.__element__.__name__ ===
                base.__element__.__name__;
            if (arg0ParentMatchesBase) {
                card = newCard;
            }
        }
        else if (arg0.__kind__ === reflection_1.ExpressionKind.PathNode) {
            const parent = arg0.__parent__;
            if (parent === null) {
                const arg0MatchesBase = arg0.__element__.__name__ === base.__element__.__name__;
                if (arg0MatchesBase) {
                    card = newCard;
                }
            }
            else {
                const arg0ParentMatchesBase = (parent === null || parent === void 0 ? void 0 : parent.type.__element__.__name__) === base.__element__.__name__;
                if (arg0ParentMatchesBase) {
                    card = newCard;
                }
            }
        }
    }
    return card;
}
function $handleModifiers(modifiers, rootExpr) {
    const mods = { ...modifiers };
    let card = rootExpr.__cardinality__;
    if (mods.filter && rootExpr.__element__.__kind__ === reflection_1.TypeKind.object) {
        card = computeFilterCardinality(mods.filter, card, rootExpr);
    }
    if (mods.order_by) {
        const orderExprs = Array.isArray(mods.order_by)
            ? mods.order_by
            : [mods.order_by];
        mods.order_by = orderExprs.map(expr => typeof expr.__element__ === "undefined"
            ? expr
            : { expression: expr });
    }
    if (mods.offset) {
        mods.offset =
            typeof mods.offset === "number"
                ? (0, literal_1.$getTypeByName)("std::number")(mods.offset)
                : mods.offset;
        card = reflection_1.cardinalityUtil.overrideLowerBound(card, "Zero");
    }
    if (mods.limit) {
        let expr = mods.limit;
        if (typeof expr === "number") {
            expr = (0, literal_1.$getTypeByName)("std::number")(expr);
        }
        else if (expr.__kind__ === reflection_1.ExpressionKind.Set) {
            expr = expr.__exprs__[0];
        }
        mods.limit = expr;
        card = reflection_1.cardinalityUtil.overrideLowerBound(card, "Zero");
    }
    return { modifiers: mods, cardinality: card };
}
exports.$handleModifiers = $handleModifiers;
function deleteExpr(expr, modifiersGetter) {
    const selectExpr = select(expr, modifiersGetter);
    return (0, path_1.$expressionify)({
        __kind__: reflection_1.ExpressionKind.Delete,
        __element__: selectExpr.__element__,
        __cardinality__: selectExpr.__cardinality__,
        __expr__: selectExpr,
    });
}
exports.delete = deleteExpr;
function $selectify(expr) {
    return expr;
}
exports.$selectify = $selectify;
const $FreeObject = (0, reflection_1.makeType)(__spec__1.spec, [...__spec__1.spec.values()].find(s => s.name === "std::FreeObject").id, literal_1.literal);
const FreeObject = {
    __kind__: reflection_1.ExpressionKind.PathNode,
    __element__: $FreeObject,
    __cardinality__: reflection_1.Cardinality.One,
    __parent__: null,
    __exclusive__: true,
    __scopeRoot__: null,
};
exports.$existingScopes = new Set();
function select(...args) {
    const firstArg = args[0];
    if (typeof firstArg !== "object" ||
        firstArg instanceof Buffer ||
        firstArg instanceof Date ||
        firstArg instanceof edgedb_1.Duration ||
        firstArg instanceof edgedb_1.LocalDateTime ||
        firstArg instanceof edgedb_1.LocalDate ||
        firstArg instanceof edgedb_1.LocalTime ||
        firstArg instanceof edgedb_1.RelativeDuration ||
        firstArg instanceof edgedb_1.ConfigMemory) {
        const literalExpr = (0, castMaps_1.literalToTypeSet)(firstArg);
        return (0, path_1.$expressionify)($selectify({
            __kind__: reflection_1.ExpressionKind.Select,
            __element__: literalExpr.__element__,
            __cardinality__: literalExpr.__cardinality__,
            __expr__: literalExpr,
            __modifiers__: {},
        }));
    }
    const [expr, shapeGetter] = typeof args[0].__element__ !== "undefined"
        ? args
        : [FreeObject, () => args[0]];
    if (!shapeGetter) {
        if (expr.__element__.__kind__ === reflection_1.TypeKind.object) {
            const objectExpr = expr;
            return (0, path_1.$expressionify)($selectify({
                __kind__: reflection_1.ExpressionKind.Select,
                __element__: {
                    __kind__: reflection_1.TypeKind.object,
                    __name__: `${objectExpr.__element__.__name__}`,
                    __pointers__: objectExpr.__element__.__pointers__,
                    __shape__: objectExpr.__element__.__shape__,
                },
                __cardinality__: objectExpr.__cardinality__,
                __expr__: objectExpr,
                __modifiers__: {},
            }));
        }
        else {
            return (0, path_1.$expressionify)($selectify({
                __kind__: reflection_1.ExpressionKind.Select,
                __element__: expr.__element__,
                __cardinality__: expr.__cardinality__,
                __expr__: expr,
                __modifiers__: {},
            }));
        }
    }
    const cleanScopedExprs = exports.$existingScopes.size === 0;
    const { modifiers: mods, shape, scope } = resolveShape(shapeGetter, expr);
    if (cleanScopedExprs) {
        exports.$existingScopes.clear();
    }
    const { modifiers, cardinality } = $handleModifiers(mods, expr);
    return (0, path_1.$expressionify)($selectify({
        __kind__: reflection_1.ExpressionKind.Select,
        __element__: expr !== scope
            ? {
                __kind__: reflection_1.TypeKind.object,
                __name__: `${expr.__element__.__name__}`,
                __pointers__: expr.__element__.__pointers__,
                __shape__: shape,
            }
            : expr.__element__,
        __cardinality__: cardinality,
        __expr__: expr,
        __modifiers__: modifiers,
        __scope__: expr !== scope && expr.__element__.__name__ !== "std::FreeObject"
            ? scope
            : undefined,
    }));
}
exports.select = select;
function resolveShape(shapeGetter, expr) {
    const modifiers = {};
    const shape = {};
    const scope = expr.__element__.__kind__ === reflection_1.TypeKind.object
        ? (0, path_1.$getScopedExpr)(expr, exports.$existingScopes)
        : expr;
    const selectShape = typeof shapeGetter === "function" ? shapeGetter(scope) : shapeGetter;
    for (const [key, value] of Object.entries(selectShape)) {
        if (key === "filter" ||
            key === "order_by" ||
            key === "offset" ||
            key === "limit") {
            modifiers[key] = value;
        }
        else {
            if (scope === expr) {
                throw new Error(`Invalid select shape key '${key}' on scalar expression, ` +
                    `only modifiers are allowed (filter, order_by, offset and limit)`);
            }
            shape[key] = resolveShapeElement(key, value, scope);
        }
    }
    return { shape, modifiers, scope };
}
function resolveShapeElement(key, value, scope) {
    var _a, _b;
    if ((typeof value === "function" &&
        ((_a = scope.__element__.__pointers__[key]) === null || _a === void 0 ? void 0 : _a.__kind__) === "link") ||
        (typeof value === "object" &&
            typeof value.__kind__ === "undefined")) {
        const childExpr = scope[key];
        const { shape: childShape, scope: childScope, modifiers: mods, } = resolveShape(value, childExpr);
        const { modifiers } = $handleModifiers(mods, childExpr);
        return {
            __kind__: reflection_1.ExpressionKind.Select,
            __element__: {
                __kind__: reflection_1.TypeKind.object,
                __name__: `${childExpr.__element__.__name__}`,
                __pointers__: childExpr.__element__.__pointers__,
                __shape__: childShape,
            },
            __cardinality__: scope.__element__.__pointers__[key].cardinality,
            __expr__: childExpr,
            __modifiers__: modifiers,
            __scope__: childScope,
        };
    }
    else if (((_b = value) === null || _b === void 0 ? void 0 : _b.__kind__) === reflection_1.ExpressionKind.PolyShapeElement) {
        const polyElement = value;
        const polyScope = scope.is(polyElement.__polyType__);
        return {
            __kind__: reflection_1.ExpressionKind.PolyShapeElement,
            __polyType__: polyScope,
            __shapeElement__: resolveShapeElement(key, polyElement.__shapeElement__, polyScope),
        };
    }
    else if (typeof value === "boolean" && key.startsWith("@")) {
        const linkProp = scope[key];
        if (!linkProp) {
            throw new Error(scope.__parent__
                ? `link property '${key}' does not exist on link ${scope.__parent__.linkName}`
                : `cannot select link property '${key}' on an object (${scope.__element__.__name__})`);
        }
        return value ? linkProp : false;
    }
    else {
        return value;
    }
}
