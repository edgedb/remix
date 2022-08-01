import { BaseType, BaseTypeToTsType, ScalarType } from "edgedb/dist/reflection/index";
import type { $expr_Literal } from "edgedb/dist/reflection/literal";
export declare function literal<T extends BaseType>(type: T, value: BaseTypeToTsType<T>): $expr_Literal<T>;
export declare const $nameMapping: Map<string, string>;
export declare function $getType(id: string): (val: any) => $expr_Literal<ScalarType>;
export declare function $getTypeByName(name: string): (val: any) => $expr_Literal<ScalarType>;
