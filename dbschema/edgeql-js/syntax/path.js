"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PathNode = exports.$PathLeaf = exports.$pathify = exports.$getScopedExpr = exports.$expressionify = exports.$jsonDestructure = void 0;
const reflection_1 = require("edgedb/dist/reflection");
const castMaps_1 = require("../castMaps");
const collections_1 = require("./collections");
const toEdgeQL_1 = require("./toEdgeQL");
const query_1 = require("./query");
function PathLeaf(root, parent, exclusive, scopeRoot = null) {
    return $expressionify({
        __kind__: reflection_1.ExpressionKind.PathLeaf,
        __element__: root.__element__,
        __cardinality__: root.__cardinality__,
        __parent__: parent,
        __exclusive__: exclusive,
        __scopeRoot__: scopeRoot,
    });
}
exports.$PathLeaf = PathLeaf;
function PathNode(root, parent, exclusive, scopeRoot = null) {
    const obj = {
        __kind__: reflection_1.ExpressionKind.PathNode,
        __element__: root.__element__,
        __cardinality__: root.__cardinality__,
        __parent__: parent,
        __exclusive__: exclusive,
        __scopeRoot__: scopeRoot,
    };
    const shape = {};
    Object.entries(obj.__element__.__pointers__).map(([key, ptr]) => {
        if (ptr.__kind__ === "property") {
            shape[key] = true;
        }
    });
    Object.defineProperty(obj, "*", {
        writable: false,
        value: shape,
    });
    return $expressionify(obj);
}
exports.$PathNode = PathNode;
const _pathCache = Symbol();
const _pointers = Symbol();
const pathifyProxyHandlers = {
    get(target, prop, proxy) {
        var _a, _b, _c;
        const ptr = target[_pointers][prop];
        if (ptr) {
            return ((_a = target[_pathCache][prop]) !== null && _a !== void 0 ? _a : (target[_pathCache][prop] = (ptr.__kind__ === "property" ? PathLeaf : PathNode)({
                __element__: ptr.target,
                __cardinality__: reflection_1.cardinalityUtil.multiplyCardinalities(target.__cardinality__, ptr.cardinality),
            }, {
                linkName: prop,
                type: proxy,
            }, (_b = ptr.exclusive) !== null && _b !== void 0 ? _b : false, (_c = target.__scopeRoot__) !== null && _c !== void 0 ? _c : (scopeRoots.has(proxy) ? proxy : null))));
        }
        return target[prop];
    },
};
function _$pathify(_root) {
    var _a;
    if (_root.__element__.__kind__ !== reflection_1.TypeKind.object) {
        return _root;
    }
    const root = _root;
    let pointers = {
        ...root.__element__.__pointers__,
    };
    if (root.__parent__) {
        const { type, linkName } = root.__parent__;
        const parentPointer = type.__element__.__pointers__[linkName];
        if ((parentPointer === null || parentPointer === void 0 ? void 0 : parentPointer.__kind__) === "link") {
            pointers = { ...pointers, ...parentPointer.properties };
        }
    }
    for (const [key, val] of Object.entries(root.__element__.__shape__ || { id: true })) {
        if (((_a = val) === null || _a === void 0 ? void 0 : _a.__element__) && !pointers[key]) {
            pointers[key] = {
                __kind__: "property",
                target: val.__element__,
                cardinality: val.__cardinality__,
                exclusive: false,
                computed: true,
                readonly: true,
                hasDefault: false,
            };
        }
    }
    root[_pointers] = pointers;
    root[_pathCache] = {};
    return new Proxy(root, pathifyProxyHandlers);
}
exports.$pathify = _$pathify;
function isFunc(expr) {
    return $expressionify({
        __kind__: reflection_1.ExpressionKind.TypeIntersection,
        __cardinality__: this.__cardinality__,
        __element__: {
            ...expr.__element__,
            __shape__: { id: true },
        },
        __expr__: this,
    });
}
function assert_single(expr) {
    return $expressionify({
        __kind__: reflection_1.ExpressionKind.Function,
        __element__: expr.__element__,
        __cardinality__: reflection_1.cardinalityUtil.overrideUpperBound(expr.__cardinality__, "One"),
        __name__: "std::assert_single",
        __args__: [expr],
        __namedargs__: {},
    });
}
const jsonDestructureProxyHandlers = {
    get(target, prop, proxy) {
        if (typeof prop === "string" &&
            prop !== "run" &&
            target[prop] === undefined) {
            const parsedProp = Number.isInteger(Number(prop)) ? Number(prop) : prop;
            return jsonDestructure.call(proxy, parsedProp);
        }
        return target[prop];
    },
};
function jsonDestructure(path) {
    const pathTypeSet = (0, castMaps_1.literalToTypeSet)(path);
    return $expressionify({
        __kind__: reflection_1.ExpressionKind.Operator,
        __element__: this.__element__,
        __cardinality__: reflection_1.cardinalityUtil.multiplyCardinalities(this.__cardinality__, pathTypeSet.__cardinality__),
        __name__: "[]",
        __opkind__: "Infix",
        __args__: [this, pathTypeSet],
    });
}
function $jsonDestructure(_expr) {
    if (_expr.__element__.__kind__ === reflection_1.TypeKind.scalar &&
        _expr.__element__.__name__ === "std::json") {
        const expr = new Proxy(_expr, jsonDestructureProxyHandlers);
        expr.destructure = jsonDestructure.bind(expr);
        return expr;
    }
    return _expr;
}
exports.$jsonDestructure = $jsonDestructure;
function $expressionify(_expr) {
    const expr = _$pathify($jsonDestructure((0, collections_1.$arrayLikeIndexify)((0, collections_1.$tuplePathify)(_expr))));
    expr.run = query_1.$queryFunc.bind(expr);
    expr.runJSON = query_1.$queryFuncJSON.bind(expr);
    expr.is = isFunc.bind(expr);
    expr.toEdgeQL = toEdgeQL_1.$toEdgeQL.bind(expr);
    expr.assert_single = () => assert_single(expr);
    return Object.freeze(expr);
}
exports.$expressionify = $expressionify;
const scopedExprCache = new WeakMap();
const scopeRoots = new WeakSet();
function $getScopedExpr(expr, existingScopes) {
    let scopedExpr = scopedExprCache.get(expr);
    if (!scopedExpr || (existingScopes === null || existingScopes === void 0 ? void 0 : existingScopes.has(scopedExpr))) {
        const uncached = !scopedExpr;
        scopedExpr = $expressionify({
            ...expr,
            __cardinality__: reflection_1.Cardinality.One,
            __scopedFrom__: expr,
        });
        scopeRoots.add(scopedExpr);
        if (uncached) {
            scopedExprCache.set(expr, scopedExpr);
        }
    }
    existingScopes === null || existingScopes === void 0 ? void 0 : existingScopes.add(scopedExpr);
    return scopedExpr;
}
exports.$getScopedExpr = $getScopedExpr;
