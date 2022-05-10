import { TypeKind, ExpressionKind, Cardinality, cardinalityUtil, $mergeObjectTypes } from "edgedb/dist/reflection/index";
import * as castMaps from "../castMaps";
import type * as _std from "../modules/std";
import type {
  ArrayType,
  TypeSet,
  BaseType,
  ObjectTypeSet,
  PrimitiveTypeSet,
  AnyTupleType,
  getPrimitiveBaseType,
} from "edgedb/dist/reflection";
import type {
  $expr_Set,
  mergeObjectTypesVariadic,
  getTypesFromExprs,
  getTypesFromObjectExprs,
  getCardsFromExprs,
  getSharedParentPrimitiveVariadic,
  LooseTypeSet,
} from "./set";

declare type getSetTypeFromExprs<
  Exprs extends [TypeSet, ...TypeSet[]]
> = LooseTypeSet<
  getSharedParentPrimitiveVariadic<getTypesFromExprs<Exprs>>,
  cardinalityUtil.mergeCardinalitiesVariadic<getCardsFromExprs<Exprs>>
>;

declare function set(): null;
declare function set<
  Expr extends castMaps.orScalarLiteral<TypeSet>
>(expr: Expr): $expr_Set<castMaps.literalToTypeSet<Expr>>;
declare function set<
  Expr extends castMaps.orScalarLiteral<TypeSet<_std.$decimalλICastableTo>>,
  Exprs extends [Expr, ...Expr[]]
>(...exprs: Exprs): $expr_Set<getSetTypeFromExprs<castMaps.mapLiteralToTypeSet<Exprs>>>;
declare function set<
  Expr extends TypeSet<ArrayType<_std.$decimalλICastableTo>>,
  Exprs extends [Expr, ...Expr[]]
>(...exprs: Exprs): $expr_Set<getSetTypeFromExprs<Exprs>>;
declare function set<
  Expr extends ObjectTypeSet,
  Exprs extends [Expr, ...Expr[]]
>(
  ...exprs: Exprs
): $expr_Set<
  LooseTypeSet<
    mergeObjectTypesVariadic<getTypesFromObjectExprs<Exprs>>,
    cardinalityUtil.mergeCardinalitiesVariadic<getCardsFromExprs<Exprs>>
  >
>;
declare function set<
  Expr extends TypeSet<AnyTupleType>,
  Exprs extends [Expr, ...Expr[]]
>(...exprs: Exprs): $expr_Set<getSetTypeFromExprs<Exprs>>;
declare function set<
  Expr extends TypeSet<BaseType> | castMaps.scalarLiterals,
  Exprs extends castMaps.orScalarLiteral<
    TypeSet<getPrimitiveBaseType<castMaps.literalToTypeSet<Expr>["__element__"]>>
  >[]
>(
  expr: Expr,
  ...exprs: Exprs
): $expr_Set<
  TypeSet<
    getPrimitiveBaseType<castMaps.literalToTypeSet<Expr>["__element__"]>,
    cardinalityUtil.mergeCardinalitiesVariadic<
      getCardsFromExprs<castMaps.mapLiteralToTypeSet<[Expr, ...Exprs]>>
    >
  >
>;
declare function set<Expr extends TypeSet<BaseType> | castMaps.scalarLiterals>(
  ...exprs: Expr[]
): $expr_Set<
  TypeSet<
    getPrimitiveBaseType<castMaps.literalToTypeSet<Expr>["__element__"]>,
    Cardinality.Many
  >
>;


export { set };
