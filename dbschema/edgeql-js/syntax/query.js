"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$queryFuncJSON = exports.$queryFunc = void 0;
const reflection_1 = require("edgedb/dist/reflection");
const json_1 = require("./json");
const select_1 = require("./select");
const runnableExpressionKinds = new Set([
    reflection_1.ExpressionKind.Select,
    reflection_1.ExpressionKind.Update,
    reflection_1.ExpressionKind.Insert,
    reflection_1.ExpressionKind.InsertUnlessConflict,
    reflection_1.ExpressionKind.Delete,
    reflection_1.ExpressionKind.For,
    reflection_1.ExpressionKind.With,
    reflection_1.ExpressionKind.WithParams,
]);
const wrappedExprCache = new WeakMap();
async function $queryFunc(cxn, args) {
    var _a;
    const expr = runnableExpressionKinds.has(this.__kind__)
        ? this
        : (_a = wrappedExprCache.get(this)) !== null && _a !== void 0 ? _a : wrappedExprCache.set(this, (0, select_1.select)(this)).get(this);
    const _args = (0, json_1.jsonifyComplexParams)(expr, args);
    if (expr.__cardinality__ === reflection_1.Cardinality.One ||
        expr.__cardinality__ === reflection_1.Cardinality.AtMostOne) {
        return cxn.querySingle(expr.toEdgeQL(), _args);
    }
    else {
        return cxn.query(expr.toEdgeQL(), _args);
    }
}
exports.$queryFunc = $queryFunc;
async function $queryFuncJSON(cxn, args) {
    var _a;
    const expr = runnableExpressionKinds.has(this.__kind__)
        ? this
        : (_a = wrappedExprCache.get(this)) !== null && _a !== void 0 ? _a : wrappedExprCache.set(this, (0, select_1.select)(this)).get(this);
    const _args = (0, json_1.jsonifyComplexParams)(expr, args);
    if (expr.__cardinality__ === reflection_1.Cardinality.One ||
        expr.__cardinality__ === reflection_1.Cardinality.AtMostOne) {
        return cxn.querySingleJSON(expr.toEdgeQL(), _args);
    }
    else {
        return cxn.queryJSON(expr.toEdgeQL(), _args);
    }
}
exports.$queryFuncJSON = $queryFuncJSON;
