import { BaseType, BaseTypeSet, Cardinality, introspect } from "edgedb/dist/reflection";
interface OverloadFuncArgDef {
    typeId: string;
    optional?: boolean;
    setoftype?: boolean;
    variadic?: boolean;
}
interface OverloadFuncDef {
    kind?: string;
    args: OverloadFuncArgDef[];
    namedArgs?: {
        [key: string]: OverloadFuncArgDef;
    };
    returnTypeId: string;
    returnTypemod?: "SetOfType" | "OptionalType";
    preservesOptionality?: boolean;
}
export declare function $resolveOverload(funcName: string, args: any[], typeSpec: introspect.Types, funcDefs: OverloadFuncDef[]): {
    kind?: string | undefined;
    returnType: BaseType;
    cardinality: Cardinality;
    args: BaseTypeSet[];
    namedArgs: {
        [key: string]: BaseTypeSet;
    };
};
export {};
