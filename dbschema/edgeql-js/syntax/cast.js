"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cast = void 0;
const reflection_1 = require("edgedb/dist/reflection");
const path_1 = require("./path");
function cast(target, expr) {
    return (0, path_1.$expressionify)({
        __element__: target,
        __cardinality__: expr === null ? reflection_1.Cardinality.Empty : expr.__cardinality__,
        __expr__: expr,
        __kind__: reflection_1.ExpressionKind.Cast,
    });
}
exports.cast = cast;
