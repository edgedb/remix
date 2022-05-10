"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$resolveOverload = void 0;
const reflection_1 = require("edgedb/dist/reflection");
const cast_1 = require("./cast");
const castMaps_1 = require("../castMaps");
const literal_1 = require("./literal");
function mapLiteralToTypeSet(literals) {
    if (Array.isArray(literals)) {
        return literals.map(lit => (lit != null ? (0, castMaps_1.literalToTypeSet)(lit) : lit));
    }
    const obj = {};
    for (const key of Object.keys(literals)) {
        obj[key] =
            literals[key] != null ? (0, castMaps_1.literalToTypeSet)(literals[key]) : literals[key];
    }
    return obj;
}
function $resolveOverload(funcName, args, typeSpec, funcDefs) {
    const [positionalArgs, namedArgs] = typeof args[0] === "object" && typeof args[0].__kind__ === "undefined"
        ? [
            mapLiteralToTypeSet(args.slice(1)),
            mapLiteralToTypeSet(args[0]),
        ]
        : [mapLiteralToTypeSet(args), undefined];
    for (const def of funcDefs) {
        const resolvedOverload = _tryOverload(funcName, positionalArgs, namedArgs, typeSpec, def);
        if (resolvedOverload !== null) {
            return resolvedOverload;
        }
    }
    throw new Error(`No function overload found for ${funcName.includes("::")
        ? `'e.${funcName.split("::")[1]}()'`
        : `operator '${funcName}'`} with args: ${args.map(arg => `${arg}`).join(", ")}`);
}
exports.$resolveOverload = $resolveOverload;
function _tryOverload(funcName, args, namedArgs, typeSpec, funcDef) {
    var _a, _b;
    if ((funcDef.namedArgs === undefined && namedArgs !== undefined) ||
        (namedArgs === undefined &&
            funcDef.namedArgs &&
            Object.values(funcDef.namedArgs).some(arg => !arg.optional))) {
        return null;
    }
    const lastParamVariadic = (_a = funcDef.args[funcDef.args.length - 1]) === null || _a === void 0 ? void 0 : _a.variadic;
    if (!lastParamVariadic && args.length > funcDef.args.length) {
        return null;
    }
    const paramCardinalities = [
        reflection_1.Cardinality.One,
    ];
    if (namedArgs) {
        for (const [key, value] of Object.entries(namedArgs)) {
            const argDef = (_b = funcDef.namedArgs) === null || _b === void 0 ? void 0 : _b[key];
            if (!argDef ||
                !compareType(typeSpec, argDef.typeId, value.__element__).match) {
                return null;
            }
            paramCardinalities.push(argDef.setoftype
                ? funcDef.preservesOptionality
                    ? reflection_1.cardinalityUtil.overrideUpperBound(value.__cardinality__, "One")
                    : reflection_1.Cardinality.One
                : argDef.optional
                    ? reflection_1.cardinalityUtil.overrideLowerBound(value.__cardinality__, "One")
                    : value.__cardinality__);
        }
    }
    const positionalArgs = [];
    let returnAnytype;
    for (let i = 0; i < funcDef.args.length; i++) {
        const argDef = funcDef.args[i];
        const arg = args[i];
        if (arg === undefined) {
            if (!argDef.optional) {
                return null;
            }
            if (i < args.length) {
                const argType = (0, reflection_1.makeType)(typeSpec, argDef.typeId, literal_1.literal);
                positionalArgs.push((0, cast_1.cast)(argType, null));
            }
        }
        else {
            const { match, anytype } = compareType(typeSpec, argDef.typeId, arg.__element__);
            if (!match) {
                return null;
            }
            if (!returnAnytype && anytype) {
                returnAnytype = anytype;
            }
            positionalArgs.push(...(argDef.variadic ? args.slice(i) : [arg]));
            if (argDef.setoftype) {
                paramCardinalities.push(funcDef.preservesOptionality
                    ? reflection_1.cardinalityUtil.overrideUpperBound(arg.__cardinality__, "One")
                    : reflection_1.Cardinality.One);
            }
            else {
                const card = argDef.variadic
                    ? reflection_1.cardinalityUtil.multiplyCardinalitiesVariadic(args.slice(i).map(el => el.__cardinality__))
                    : arg.__cardinality__;
                paramCardinalities.push(argDef.optional
                    ? reflection_1.cardinalityUtil.overrideLowerBound(card, "One")
                    : card);
            }
        }
    }
    let cardinality;
    if (funcName === "if_else") {
        cardinality = reflection_1.cardinalityUtil.multiplyCardinalities(reflection_1.cardinalityUtil.orCardinalities(positionalArgs[0].__cardinality__, positionalArgs[2].__cardinality__), positionalArgs[1].__cardinality__);
    }
    else if (funcName === "std::assert_exists") {
        cardinality = reflection_1.cardinalityUtil.overrideLowerBound(positionalArgs[0].__cardinality__, "One");
    }
    else {
        cardinality =
            funcDef.returnTypemod === "SetOfType"
                ? reflection_1.Cardinality.Many
                : reflection_1.cardinalityUtil.multiplyCardinalitiesVariadic(paramCardinalities);
        if (funcDef.returnTypemod === "OptionalType" &&
            !funcDef.preservesOptionality) {
            cardinality = reflection_1.cardinalityUtil.overrideLowerBound(cardinality, "Zero");
        }
    }
    return {
        kind: funcDef.kind,
        returnType: (0, reflection_1.makeType)(typeSpec, funcDef.returnTypeId, literal_1.literal, returnAnytype),
        cardinality,
        args: positionalArgs,
        namedArgs: namedArgs !== null && namedArgs !== void 0 ? namedArgs : {},
    };
}
function compareType(typeSpec, typeId, arg) {
    var _a;
    const type = typeSpec.get(typeId);
    if (type.name === "anytype") {
        return { match: true, anytype: arg };
    }
    if (type.name === "std::anyenum") {
        return { match: arg.__kind__ === reflection_1.TypeKind.enum };
    }
    if (type.kind === "scalar") {
        arg = (_a = arg.__casttype__) !== null && _a !== void 0 ? _a : arg;
        return {
            match: (arg.__kind__ === reflection_1.TypeKind.scalar || arg.__kind__ === reflection_1.TypeKind.enum) &&
                (arg.__name__ === type.name ||
                    (0, castMaps_1.isImplicitlyCastableTo)(arg.__name__, type.name)),
        };
    }
    if (type.kind === "array") {
        if (arg.__kind__ === reflection_1.TypeKind.array) {
            return compareType(typeSpec, type.array_element_id, arg.__element__);
        }
    }
    if (type.kind === "object") {
        if (arg.__kind__ !== reflection_1.TypeKind.object)
            return { match: false };
        const objectArg = arg;
        let match = true;
        for (const ptr of type.pointers) {
            if (objectArg.__pointers__[ptr.name]) {
                const argPtr = objectArg.__pointers__[ptr.name];
                const ptrTarget = typeSpec.get(ptr.target_id);
                if (ptrTarget.name !== argPtr.target.__name__ ||
                    ptr.real_cardinality !== argPtr.cardinality) {
                    match = false;
                }
            }
        }
        return {
            match,
        };
    }
    if (type.kind === "tuple") {
        const items = arg.__kind__ === reflection_1.TypeKind.tuple
            ? arg.__items__
            : arg.__kind__ === reflection_1.TypeKind.namedtuple
                ? arg.__shape__
                : null;
        if (items) {
            const keys = Object.keys(items);
            if (keys.length === type.tuple_elements.length) {
                let anytype;
                for (let i = 0; i < keys.length; i++) {
                    if (keys[i] !== type.tuple_elements[i].name) {
                        return { match: false };
                    }
                    const { match: m, anytype: a } = compareType(typeSpec, type.tuple_elements[i].target_id, items[keys[i]]);
                    if (!m) {
                        return { match: false };
                    }
                    if (a)
                        anytype = a;
                }
                return { match: true, anytype };
            }
        }
    }
    return { match: false };
}
