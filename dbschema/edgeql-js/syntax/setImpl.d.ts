import { $ } from "edgedb";
import * as castMaps from "../castMaps";
import type { $expr_Set, mergeObjectTypesVariadic, getTypesFromExprs, getTypesFromObjectExprs, getCardsFromExprs, getSharedParentPrimitiveVariadic, LooseTypeSet } from "./set";
import type * as _cal from "../modules/cal";
import type * as _std from "../modules/std";

declare type getSetTypeFromExprs<
  Exprs extends [$.TypeSet, ...$.TypeSet[]]
> = LooseTypeSet<
  getSharedParentPrimitiveVariadic<getTypesFromExprs<Exprs>>,
  $.cardinalityUtil.mergeCardinalitiesVariadic<getCardsFromExprs<Exprs>>
>;

declare function set(): null;
declare function set<
  Expr extends castMaps.orScalarLiteral<$.TypeSet>
>(expr: Expr): $expr_Set<castMaps.literalToTypeSet<Expr>>;
declare function set<
  Expr extends castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_durationλICastableTo>>,
  Exprs extends [Expr, ...Expr[]]
>(...exprs: Exprs): $expr_Set<getSetTypeFromExprs<castMaps.mapLiteralToTypeSet<Exprs>>>;
declare function set<
  Expr extends $.TypeSet<$.ArrayType<_cal.$relative_durationλICastableTo>>,
  Exprs extends [Expr, ...Expr[]]
>(...exprs: Exprs): $expr_Set<getSetTypeFromExprs<Exprs>>;
declare function set<
  Expr extends castMaps.orScalarLiteral<$.TypeSet<_cal.$local_datetimeλICastableTo>>,
  Exprs extends [Expr, ...Expr[]]
>(...exprs: Exprs): $expr_Set<getSetTypeFromExprs<castMaps.mapLiteralToTypeSet<Exprs>>>;
declare function set<
  Expr extends $.TypeSet<$.ArrayType<_cal.$local_datetimeλICastableTo>>,
  Exprs extends [Expr, ...Expr[]]
>(...exprs: Exprs): $expr_Set<getSetTypeFromExprs<Exprs>>;
declare function set<
  Expr extends castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
  Exprs extends [Expr, ...Expr[]]
>(...exprs: Exprs): $expr_Set<getSetTypeFromExprs<castMaps.mapLiteralToTypeSet<Exprs>>>;
declare function set<
  Expr extends $.TypeSet<$.ArrayType<_std.$decimalλICastableTo>>,
  Exprs extends [Expr, ...Expr[]]
>(...exprs: Exprs): $expr_Set<getSetTypeFromExprs<Exprs>>;
declare function set<
  Expr extends $.ObjectTypeSet,
  Exprs extends [Expr, ...Expr[]]
>(
  ...exprs: Exprs
): $expr_Set<
  LooseTypeSet<
    mergeObjectTypesVariadic<getTypesFromObjectExprs<Exprs>>,
    $.cardinalityUtil.mergeCardinalitiesVariadic<getCardsFromExprs<Exprs>>
  >
>;
declare function set<
  Expr extends $.TypeSet<$.AnyTupleType>,
  Exprs extends [Expr, ...Expr[]]
>(...exprs: Exprs): $expr_Set<getSetTypeFromExprs<Exprs>>;
declare function set<
  Expr extends $.TypeSet<$.BaseType> | castMaps.scalarLiterals,
  Exprs extends castMaps.orScalarLiteral<
    $.TypeSet<$.getPrimitiveBaseType<castMaps.literalToTypeSet<Expr>["__element__"]>>
  >[]
>(
  expr: Expr,
  ...exprs: Exprs
): $expr_Set<
  $.TypeSet<
    $.getPrimitiveBaseType<castMaps.literalToTypeSet<Expr>["__element__"]>,
    $.cardinalityUtil.mergeCardinalitiesVariadic<
      getCardsFromExprs<castMaps.mapLiteralToTypeSet<[Expr, ...Exprs]>>
    >
  >
>;
declare function set<Expr extends $.TypeSet<$.BaseType> | castMaps.scalarLiterals>(
  ...exprs: Expr[]
): $expr_Set<
  $.TypeSet<
    $.getPrimitiveBaseType<castMaps.literalToTypeSet<Expr>["__element__"]>,
    $.Cardinality.Many
  >
>;


export { set };
