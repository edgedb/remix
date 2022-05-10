"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.for = void 0;
const reflection_1 = require("edgedb/dist/reflection");
const path_1 = require("./path");
function _for(set, expr) {
    const forVar = (0, path_1.$expressionify)({
        __kind__: reflection_1.ExpressionKind.ForVar,
        __element__: set.__element__,
        __cardinality__: reflection_1.Cardinality.One,
    });
    const returnExpr = expr(forVar);
    return (0, path_1.$expressionify)({
        __kind__: reflection_1.ExpressionKind.For,
        __element__: returnExpr.__element__,
        __cardinality__: reflection_1.cardinalityUtil.multiplyCardinalities(set.__cardinality__, returnExpr.__cardinality__),
        __iterSet__: set,
        __expr__: returnExpr,
        __forVar__: forVar,
    });
}
exports.for = _for;
