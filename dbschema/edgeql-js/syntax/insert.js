"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insert = exports.$normaliseInsertShape = exports.$insertify = void 0;
const reflection_1 = require("edgedb/dist/reflection");
const path_1 = require("./path");
const cast_1 = require("./cast");
const set_1 = require("./set");
const literal_1 = require("./literal");
const literal_2 = require("./literal");
function unlessConflict(conflictGetter) {
    const expr = {
        __kind__: reflection_1.ExpressionKind.InsertUnlessConflict,
        __element__: this.__element__,
        __cardinality__: reflection_1.Cardinality.AtMostOne,
        __expr__: this,
    };
    if (!conflictGetter) {
        expr.__conflict__ = { on: null };
        return (0, path_1.$expressionify)(expr);
    }
    else {
        const scopedExpr = (0, path_1.$getScopedExpr)(this.__expr__);
        const conflict = conflictGetter(scopedExpr);
        expr.__conflict__ = conflict;
        if (conflict.else) {
            expr.__cardinality__ = conflict.else.__cardinality__;
            if (this.__element__.__name__ !== conflict.else.__element__.__name__) {
                expr.__element__ = (0, literal_2.$getTypeByName)("std::Object");
            }
        }
        return (0, path_1.$expressionify)(expr);
    }
}
function $insertify(expr) {
    expr.unlessConflict = unlessConflict.bind(expr);
    return expr;
}
exports.$insertify = $insertify;
function $normaliseInsertShape(root, shape, isUpdate = false) {
    const newShape = {};
    for (const [key, _val] of Object.entries(shape)) {
        let val = _val;
        let setModify = null;
        if (isUpdate && _val != null && typeof _val === "object") {
            const valKeys = Object.keys(_val);
            if (valKeys.length === 1 &&
                (valKeys[0] === "+=" || valKeys[0] === "-=")) {
                val = _val[valKeys[0]];
                setModify = valKeys[0];
            }
        }
        if ((val === null || val === void 0 ? void 0 : val.__kind__) || val === undefined) {
            newShape[key] = _val;
        }
        else {
            const pointer = root.__element__.__pointers__[key];
            if (!pointer || (pointer.__kind__ !== "property" && val !== null)) {
                throw new Error(`Could not find property pointer for ${isUpdate ? "update" : "insert"} shape key: '${key}'`);
            }
            const isMulti = pointer.cardinality === reflection_1.Cardinality.AtLeastOne ||
                pointer.cardinality === reflection_1.Cardinality.Many;
            const wrappedVal = val === null
                ? (0, cast_1.cast)(pointer.target, null)
                : isMulti && Array.isArray(val)
                    ? (0, set_1.set)(...val.map(v => literal_1.literal(pointer.target, v)))
                    : literal_1.literal(pointer.target, val);
            newShape[key] = setModify
                ? { [setModify]: wrappedVal }
                : wrappedVal;
        }
    }
    return newShape;
}
exports.$normaliseInsertShape = $normaliseInsertShape;
function insert(root, shape) {
    const expr = {
        __kind__: reflection_1.ExpressionKind.Insert,
        __element__: root.__element__,
        __cardinality__: reflection_1.Cardinality.One,
        __expr__: root,
        __shape__: $normaliseInsertShape(root, shape),
    };
    expr.unlessConflict = unlessConflict.bind(expr);
    return (0, path_1.$expressionify)($insertify(expr));
}
exports.insert = insert;
