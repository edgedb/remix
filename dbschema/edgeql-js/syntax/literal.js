"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$getTypeByName = exports.$getType = exports.literal = void 0;
const reflection_1 = require("edgedb/dist/reflection");
const path_1 = require("./path");
const __spec__1 = require("../__spec__");
function literal(type, value) {
    return (0, path_1.$expressionify)({
        __element__: type,
        __cardinality__: reflection_1.Cardinality.One,
        __kind__: reflection_1.ExpressionKind.Literal,
        __value__: value,
    });
}
exports.literal = literal;
const nameMapping = new Map([
    ...[...__spec__1.spec.values()].map(type => [type.name, type.id]),
    ["std::number", "00000000-0000-0000-0000-0000000001ff"],
]);
function $getType(id) {
    return (0, reflection_1.makeType)(__spec__1.spec, id, literal);
}
exports.$getType = $getType;
function $getTypeByName(name) {
    return (0, reflection_1.makeType)(__spec__1.spec, nameMapping.get(name), literal);
}
exports.$getTypeByName = $getTypeByName;
