import type { ArrayType, BaseType, BaseTypeTuple, BaseTypeToTsType, cardinalityUtil, Cardinality, EnumType, LinkDesc, NamedTupleType, ObjectType, ObjectTypeSet, PrimitiveTypeSet, PropertyDesc, ScalarType, TupleType, TypeSet } from "edgedb/dist/reflection";
import type { scalarCastableFrom, scalarAssignableBy } from "../castMaps";
export declare type anonymizeObject<T extends ObjectType> = ObjectType<string, T["__pointers__"], any>;
declare type assignableTuple<Items extends BaseTypeTuple> = {
    [k in keyof Items]: Items[k] extends BaseType ? assignableBy<Items[k]> : never;
} extends infer NewItems ? NewItems extends BaseTypeTuple ? NewItems : never : never;
export declare type assignableBy<T extends BaseType> = T extends ScalarType ? scalarAssignableBy<T> : T extends ObjectType ? anonymizeObject<T> : T extends EnumType ? T : T extends ArrayType ? ArrayType<assignableBy<T["__element__"]>> : T extends TupleType ? TupleType<assignableTuple<T["__items__"]>> : T extends NamedTupleType ? NamedTupleType<{
    [k in keyof T["__shape__"]]: assignableBy<T["__shape__"][k]>;
}> : never;
export declare type pointerToAssignmentExpression<Pointer extends PropertyDesc | LinkDesc, IsSetModifier extends boolean = false> = setToAssignmentExpression<TypeSet<Pointer["target"], Pointer["cardinality"]>, IsSetModifier>;
export declare type setToAssignmentExpression<Set extends TypeSet, IsSetModifier extends boolean> = [Set] extends [PrimitiveTypeSet] ? TypeSet<assignableBy<Set["__element__"]>, cardinalityUtil.assignable<Set["__cardinality__"]>> | getAssignmentLiteral<Set, IsSetModifier> : [Set] extends [ObjectTypeSet] ? TypeSet<ObjectType<string, Set["__element__"]["__pointers__"]>, cardinalityUtil.assignable<cardinalityUtil.overrideLowerBound<Set["__cardinality__"], "Zero">>> : never;
declare type getAssignmentLiteral<Set extends PrimitiveTypeSet, IsSetModifier extends boolean> = BaseTypeToTsType<Set["__element__"]> extends infer TsType ? TsType | (Set["__cardinality__"] extends Cardinality.Many ? TsType[] : Set["__cardinality__"] extends Cardinality.AtLeastOne ? IsSetModifier extends true ? TsType[] : [TsType, ...TsType[]] : never) : never;
declare type castableTuple<Items extends BaseTypeTuple> = {
    [k in keyof Items]: Items[k] extends BaseType ? castableFrom<Items[k]> : never;
} extends infer NewItems ? NewItems extends BaseTypeTuple ? NewItems : never : never;
export declare type castableFrom<T extends BaseType> = T extends ScalarType ? scalarCastableFrom<T> : T extends ObjectType ? anonymizeObject<T> : T extends ArrayType ? ArrayType<castableFrom<T["__element__"]>> : T extends TupleType ? TupleType<castableTuple<T["__items__"]>> : T extends NamedTupleType ? NamedTupleType<{
    [k in keyof T["__shape__"]]: castableFrom<T["__shape__"][k]>;
}> : never;
export declare type pointerToCastableExpression<Pointer extends PropertyDesc | LinkDesc> = [Pointer] extends [PropertyDesc] ? {
    __element__: castableFrom<Pointer["target"]>;
    __cardinality__: cardinalityUtil.assignable<Pointer["cardinality"]>;
} : [Pointer] extends [LinkDesc] ? TypeSet<ObjectType<string, Pointer["target"]["__pointers__"]>, cardinalityUtil.assignable<Pointer["cardinality"]>> : never;
export {};
