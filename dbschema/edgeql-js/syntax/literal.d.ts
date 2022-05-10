import { BaseType, BaseTypeToTsType, unwrapCastableType, ScalarType } from "edgedb/dist/reflection";
import type { $expr_Literal } from "edgedb/dist/reflection/literal";
export declare function literal<T extends BaseType>(type: T, value: BaseTypeToTsType<unwrapCastableType<T>>): $expr_Literal<unwrapCastableType<T>>;
export declare function $getType(id: string): (val: any) => $expr_Literal<ScalarType>;
export declare function $getTypeByName(name: string): (val: any) => $expr_Literal<ScalarType>;
