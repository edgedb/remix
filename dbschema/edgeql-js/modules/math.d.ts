import { $ } from "edgedb";
import * as _ from "../imports";
import type * as _std from "./std";
declare type var_f8ded26cbda611ec945d07d73a3d1ee5λFuncExpr<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
> = $.$expr_Function<
  "math::var",
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  {},
  $.TypeSet<_std.$number, $.cardinalityUtil.overrideLowerBound<$.Cardinality.One, 'Zero'>>
>;
declare type var_f8ded26cbda611ec945d07d73a3d1ee5λFuncExpr2<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
> = $.$expr_Function<
  "math::var",
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  {},
  $.TypeSet<_std.$decimal, $.cardinalityUtil.overrideLowerBound<$.Cardinality.One, 'Zero'>>
>;
/**
 * Return the sample variance of the input set.
 */
declare function var_f8ded26cbda611ec945d07d73a3d1ee5<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  vals: P1,
): var_f8ded26cbda611ec945d07d73a3d1ee5λFuncExpr<P1>;
/**
 * Return the sample variance of the input set.
 */
declare function var_f8ded26cbda611ec945d07d73a3d1ee5<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  vals: P1,
): var_f8ded26cbda611ec945d07d73a3d1ee5λFuncExpr2<P1>;

declare type absλFuncExpr<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$anyreal>>,
> = $.$expr_Function<
  "math::abs",
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  {},
  $.TypeSet<_std.$anyreal, _.castMaps.literalToTypeSet<P1>["__cardinality__"]>
>;
/**
 * Return the absolute value of the input *x*.
 */
declare function abs<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$anyreal>>,
>(
  x: P1,
): absλFuncExpr<P1>;

declare type ceilλFuncExpr<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
> = $.$expr_Function<
  "math::ceil",
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  {},
  $.TypeSet<_std.$number, _.castMaps.literalToTypeSet<P1>["__cardinality__"]>
>;
declare type ceilλFuncExpr2<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
> = $.$expr_Function<
  "math::ceil",
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  {},
  $.TypeSet<_std.$bigint, _.castMaps.literalToTypeSet<P1>["__cardinality__"]>
>;
declare type ceilλFuncExpr3<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
> = $.$expr_Function<
  "math::ceil",
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  {},
  $.TypeSet<_std.$decimal, _.castMaps.literalToTypeSet<P1>["__cardinality__"]>
>;
/**
 * Round up to the nearest integer.
 */
declare function ceil<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  x: P1,
): ceilλFuncExpr<P1>;
/**
 * Round up to the nearest integer.
 */
declare function ceil<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
>(
  x: P1,
): ceilλFuncExpr2<P1>;
/**
 * Round up to the nearest integer.
 */
declare function ceil<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  x: P1,
): ceilλFuncExpr3<P1>;

declare type floorλFuncExpr<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
> = $.$expr_Function<
  "math::floor",
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  {},
  $.TypeSet<_std.$number, _.castMaps.literalToTypeSet<P1>["__cardinality__"]>
>;
declare type floorλFuncExpr2<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
> = $.$expr_Function<
  "math::floor",
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  {},
  $.TypeSet<_std.$bigint, _.castMaps.literalToTypeSet<P1>["__cardinality__"]>
>;
declare type floorλFuncExpr3<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
> = $.$expr_Function<
  "math::floor",
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  {},
  $.TypeSet<_std.$decimal, _.castMaps.literalToTypeSet<P1>["__cardinality__"]>
>;
/**
 * Round down to the nearest integer.
 */
declare function floor<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  x: P1,
): floorλFuncExpr<P1>;
/**
 * Round down to the nearest integer.
 */
declare function floor<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
>(
  x: P1,
): floorλFuncExpr2<P1>;
/**
 * Round down to the nearest integer.
 */
declare function floor<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  x: P1,
): floorλFuncExpr3<P1>;

declare type lnλFuncExpr<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
> = $.$expr_Function<
  "math::ln",
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  {},
  $.TypeSet<_std.$number, _.castMaps.literalToTypeSet<P1>["__cardinality__"]>
>;
declare type lnλFuncExpr2<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
> = $.$expr_Function<
  "math::ln",
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  {},
  $.TypeSet<_std.$decimal, _.castMaps.literalToTypeSet<P1>["__cardinality__"]>
>;
/**
 * Return the natural logarithm of the input value.
 */
declare function ln<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  x: P1,
): lnλFuncExpr<P1>;
/**
 * Return the natural logarithm of the input value.
 */
declare function ln<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  x: P1,
): lnλFuncExpr2<P1>;

declare type lgλFuncExpr<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
> = $.$expr_Function<
  "math::lg",
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  {},
  $.TypeSet<_std.$number, _.castMaps.literalToTypeSet<P1>["__cardinality__"]>
>;
declare type lgλFuncExpr2<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
> = $.$expr_Function<
  "math::lg",
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  {},
  $.TypeSet<_std.$decimal, _.castMaps.literalToTypeSet<P1>["__cardinality__"]>
>;
/**
 * Return the base 10 logarithm of the input value.
 */
declare function lg<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  x: P1,
): lgλFuncExpr<P1>;
/**
 * Return the base 10 logarithm of the input value.
 */
declare function lg<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  x: P1,
): lgλFuncExpr2<P1>;

declare type logλFuncExpr<
  NamedArgs extends {
    "base": _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
  },
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
> = $.$expr_Function<
  "math::log",
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  _.castMaps.mapLiteralToTypeSet<NamedArgs>,
  $.TypeSet<_std.$decimal, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<NamedArgs["base"]>["__cardinality__"]>>
>;
/**
 * Return the logarithm of the input value in the specified *base*.
 */
declare function log<
  NamedArgs extends {
    "base": _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
  },
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  namedArgs: NamedArgs,
  x: P1,
): logλFuncExpr<NamedArgs, P1>;

declare type meanλFuncExpr<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
> = $.$expr_Function<
  "math::mean",
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  {},
  $.TypeSet<_std.$number, $.Cardinality.One>
>;
declare type meanλFuncExpr2<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
> = $.$expr_Function<
  "math::mean",
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  {},
  $.TypeSet<_std.$decimal, $.Cardinality.One>
>;
/**
 * Return the arithmetic mean of the input set.
 */
declare function mean<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  vals: P1,
): meanλFuncExpr<P1>;
/**
 * Return the arithmetic mean of the input set.
 */
declare function mean<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  vals: P1,
): meanλFuncExpr2<P1>;

declare type stddevλFuncExpr<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
> = $.$expr_Function<
  "math::stddev",
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  {},
  $.TypeSet<_std.$number, $.Cardinality.One>
>;
declare type stddevλFuncExpr2<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
> = $.$expr_Function<
  "math::stddev",
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  {},
  $.TypeSet<_std.$decimal, $.Cardinality.One>
>;
/**
 * Return the sample standard deviation of the input set.
 */
declare function stddev<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  vals: P1,
): stddevλFuncExpr<P1>;
/**
 * Return the sample standard deviation of the input set.
 */
declare function stddev<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  vals: P1,
): stddevλFuncExpr2<P1>;

declare type stddev_popλFuncExpr<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
> = $.$expr_Function<
  "math::stddev_pop",
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  {},
  $.TypeSet<_std.$number, $.Cardinality.One>
>;
declare type stddev_popλFuncExpr2<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
> = $.$expr_Function<
  "math::stddev_pop",
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  {},
  $.TypeSet<_std.$decimal, $.Cardinality.One>
>;
/**
 * Return the population standard deviation of the input set.
 */
declare function stddev_pop<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  vals: P1,
): stddev_popλFuncExpr<P1>;
/**
 * Return the population standard deviation of the input set.
 */
declare function stddev_pop<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  vals: P1,
): stddev_popλFuncExpr2<P1>;

declare type var_popλFuncExpr<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
> = $.$expr_Function<
  "math::var_pop",
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  {},
  $.TypeSet<_std.$number, $.cardinalityUtil.overrideLowerBound<$.Cardinality.One, 'Zero'>>
>;
declare type var_popλFuncExpr2<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
> = $.$expr_Function<
  "math::var_pop",
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  {},
  $.TypeSet<_std.$decimal, $.cardinalityUtil.overrideLowerBound<$.Cardinality.One, 'Zero'>>
>;
/**
 * Return the population variance of the input set.
 */
declare function var_pop<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  vals: P1,
): var_popλFuncExpr<P1>;
/**
 * Return the population variance of the input set.
 */
declare function var_pop<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  vals: P1,
): var_popλFuncExpr2<P1>;



declare type __defaultExports = {
  "var": typeof var_f8ded26cbda611ec945d07d73a3d1ee5;
  "abs": typeof abs;
  "ceil": typeof ceil;
  "floor": typeof floor;
  "ln": typeof ln;
  "lg": typeof lg;
  "log": typeof log;
  "mean": typeof mean;
  "stddev": typeof stddev;
  "stddev_pop": typeof stddev_pop;
  "var_pop": typeof var_pop
};
declare const __defaultExports: __defaultExports;
export default __defaultExports;
