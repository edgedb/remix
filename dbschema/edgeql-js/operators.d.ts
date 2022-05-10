import { $ } from "edgedb";
import * as _ from "./imports";
import type * as _std from "./modules/std";
import type * as _cfg from "./modules/cfg";
import type * as _cal from "./modules/cal";


/**
* Compare two values for equality.
*/
declare function op<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
>(
  l: P1, op: "=", r: P2
): $.$expr_Operator<
  "=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Compare two values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bool>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bool>>,
>(
  l: P1, op: "=", r: P2
): $.$expr_Operator<
  "=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<$.EnumType>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<$.EnumType>>,
>(
  l: P1, op: "=", r: P2
): $.$expr_Operator<
  "=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  l: P1, op: "=", r: P2
): $.$expr_Operator<
  "=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
>(
  l: P1, op: "=", r: P2
): $.$expr_Operator<
  "=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for equality.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<_std.$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<_std.$decimalλICastableTo>>,
>(
  l: P1, op: "=", r: P2
): $.$expr_Operator<
  "=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Compare two values for equality.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
>(
  l: P1, op: "=", r: P2
): $.$expr_Operator<
  "=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Compare two values for equality.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
>(
  l: P1, op: "=", r: P2
): $.$expr_Operator<
  "=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Compare two values for equality.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.ArrayType<$.getPrimitiveNonArrayBaseType<P1["__element__"]["__element__"]>>>,
>(
  l: P1, op: "=", r: P2
): $.$expr_Operator<
  "=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Compare two values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bytes>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bytes>>,
>(
  l: P1, op: "=", r: P2
): $.$expr_Operator<
  "=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$datetime>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$datetime>>,
>(
  l: P1, op: "=", r: P2
): $.$expr_Operator<
  "=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
>(
  l: P1, op: "=", r: P2
): $.$expr_Operator<
  "=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$json>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$json>>,
>(
  l: P1, op: "=", r: P2
): $.$expr_Operator<
  "=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
>(
  l: P1, op: "=", r: P2
): $.$expr_Operator<
  "=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$uuid>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$uuid>>,
>(
  l: P1, op: "=", r: P2
): $.$expr_Operator<
  "=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for equality.
*/
declare function op<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
>(
  l: P1, op: "=", r: P2
): $.$expr_Operator<
  "=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Compare two values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cfg.$memory>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cfg.$memory>>,
>(
  l: P1, op: "=", r: P2
): $.$expr_Operator<
  "=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_datetime>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_datetime>>,
>(
  l: P1, op: "=", r: P2
): $.$expr_Operator<
  "=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_date>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_date>>,
>(
  l: P1, op: "=", r: P2
): $.$expr_Operator<
  "=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_time>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_time>>,
>(
  l: P1, op: "=", r: P2
): $.$expr_Operator<
  "=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
>(
  l: P1, op: "=", r: P2
): $.$expr_Operator<
  "=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$anyint>>,
>(
  l: P1, op: "=", r: P2
): $.$expr_Operator<
  "=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  l: P1, op: "=", r: P2
): $.$expr_Operator<
  "=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two (potentially empty) values for equality.
*/
declare function op<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
>(
  l: P1, op: "?=", r: P2
): $.$expr_Operator<
  "?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
/**
* Compare two (potentially empty) values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bool>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bool>>,
>(
  l: P1, op: "?=", r: P2
): $.$expr_Operator<
  "?=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<$.EnumType>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<$.EnumType>>,
>(
  l: P1, op: "?=", r: P2
): $.$expr_Operator<
  "?=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  l: P1, op: "?=", r: P2
): $.$expr_Operator<
  "?=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
>(
  l: P1, op: "?=", r: P2
): $.$expr_Operator<
  "?=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for equality.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<_std.$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<_std.$decimalλICastableTo>>,
>(
  l: P1, op: "?=", r: P2
): $.$expr_Operator<
  "?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
/**
* Compare two (potentially empty) values for equality.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
>(
  l: P1, op: "?=", r: P2
): $.$expr_Operator<
  "?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
/**
* Compare two (potentially empty) values for equality.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
>(
  l: P1, op: "?=", r: P2
): $.$expr_Operator<
  "?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
/**
* Compare two (potentially empty) values for equality.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.ArrayType<$.getPrimitiveNonArrayBaseType<P1["__element__"]["__element__"]>>>,
>(
  l: P1, op: "?=", r: P2
): $.$expr_Operator<
  "?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
/**
* Compare two (potentially empty) values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bytes>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bytes>>,
>(
  l: P1, op: "?=", r: P2
): $.$expr_Operator<
  "?=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$datetime>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$datetime>>,
>(
  l: P1, op: "?=", r: P2
): $.$expr_Operator<
  "?=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
>(
  l: P1, op: "?=", r: P2
): $.$expr_Operator<
  "?=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$json>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$json>>,
>(
  l: P1, op: "?=", r: P2
): $.$expr_Operator<
  "?=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
>(
  l: P1, op: "?=", r: P2
): $.$expr_Operator<
  "?=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$uuid>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$uuid>>,
>(
  l: P1, op: "?=", r: P2
): $.$expr_Operator<
  "?=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for equality.
*/
declare function op<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
>(
  l: P1, op: "?=", r: P2
): $.$expr_Operator<
  "?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
/**
* Compare two (potentially empty) values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cfg.$memory>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cfg.$memory>>,
>(
  l: P1, op: "?=", r: P2
): $.$expr_Operator<
  "?=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_datetime>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_datetime>>,
>(
  l: P1, op: "?=", r: P2
): $.$expr_Operator<
  "?=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_date>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_date>>,
>(
  l: P1, op: "?=", r: P2
): $.$expr_Operator<
  "?=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_time>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_time>>,
>(
  l: P1, op: "?=", r: P2
): $.$expr_Operator<
  "?=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
>(
  l: P1, op: "?=", r: P2
): $.$expr_Operator<
  "?=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$anyint>>,
>(
  l: P1, op: "?=", r: P2
): $.$expr_Operator<
  "?=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for equality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  l: P1, op: "?=", r: P2
): $.$expr_Operator<
  "?=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two values for inequality.
*/
declare function op<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
>(
  l: P1, op: "!=", r: P2
): $.$expr_Operator<
  "!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Compare two values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bool>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bool>>,
>(
  l: P1, op: "!=", r: P2
): $.$expr_Operator<
  "!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<$.EnumType>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<$.EnumType>>,
>(
  l: P1, op: "!=", r: P2
): $.$expr_Operator<
  "!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  l: P1, op: "!=", r: P2
): $.$expr_Operator<
  "!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
>(
  l: P1, op: "!=", r: P2
): $.$expr_Operator<
  "!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for inequality.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<_std.$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<_std.$decimalλICastableTo>>,
>(
  l: P1, op: "!=", r: P2
): $.$expr_Operator<
  "!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Compare two values for inequality.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
>(
  l: P1, op: "!=", r: P2
): $.$expr_Operator<
  "!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Compare two values for inequality.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
>(
  l: P1, op: "!=", r: P2
): $.$expr_Operator<
  "!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Compare two values for inequality.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.ArrayType<$.getPrimitiveNonArrayBaseType<P1["__element__"]["__element__"]>>>,
>(
  l: P1, op: "!=", r: P2
): $.$expr_Operator<
  "!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Compare two values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bytes>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bytes>>,
>(
  l: P1, op: "!=", r: P2
): $.$expr_Operator<
  "!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$datetime>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$datetime>>,
>(
  l: P1, op: "!=", r: P2
): $.$expr_Operator<
  "!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
>(
  l: P1, op: "!=", r: P2
): $.$expr_Operator<
  "!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$json>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$json>>,
>(
  l: P1, op: "!=", r: P2
): $.$expr_Operator<
  "!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
>(
  l: P1, op: "!=", r: P2
): $.$expr_Operator<
  "!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$uuid>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$uuid>>,
>(
  l: P1, op: "!=", r: P2
): $.$expr_Operator<
  "!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for inequality.
*/
declare function op<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
>(
  l: P1, op: "!=", r: P2
): $.$expr_Operator<
  "!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Compare two values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cfg.$memory>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cfg.$memory>>,
>(
  l: P1, op: "!=", r: P2
): $.$expr_Operator<
  "!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_datetime>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_datetime>>,
>(
  l: P1, op: "!=", r: P2
): $.$expr_Operator<
  "!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_date>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_date>>,
>(
  l: P1, op: "!=", r: P2
): $.$expr_Operator<
  "!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_time>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_time>>,
>(
  l: P1, op: "!=", r: P2
): $.$expr_Operator<
  "!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
>(
  l: P1, op: "!=", r: P2
): $.$expr_Operator<
  "!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$anyint>>,
>(
  l: P1, op: "!=", r: P2
): $.$expr_Operator<
  "!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  l: P1, op: "!=", r: P2
): $.$expr_Operator<
  "!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Compare two (potentially empty) values for inequality.
*/
declare function op<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
>(
  l: P1, op: "?!=", r: P2
): $.$expr_Operator<
  "?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
/**
* Compare two (potentially empty) values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bool>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bool>>,
>(
  l: P1, op: "?!=", r: P2
): $.$expr_Operator<
  "?!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<$.EnumType>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<$.EnumType>>,
>(
  l: P1, op: "?!=", r: P2
): $.$expr_Operator<
  "?!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  l: P1, op: "?!=", r: P2
): $.$expr_Operator<
  "?!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
>(
  l: P1, op: "?!=", r: P2
): $.$expr_Operator<
  "?!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for inequality.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<_std.$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<_std.$decimalλICastableTo>>,
>(
  l: P1, op: "?!=", r: P2
): $.$expr_Operator<
  "?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
/**
* Compare two (potentially empty) values for inequality.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
>(
  l: P1, op: "?!=", r: P2
): $.$expr_Operator<
  "?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
/**
* Compare two (potentially empty) values for inequality.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
>(
  l: P1, op: "?!=", r: P2
): $.$expr_Operator<
  "?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
/**
* Compare two (potentially empty) values for inequality.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.ArrayType<$.getPrimitiveNonArrayBaseType<P1["__element__"]["__element__"]>>>,
>(
  l: P1, op: "?!=", r: P2
): $.$expr_Operator<
  "?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
/**
* Compare two (potentially empty) values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bytes>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bytes>>,
>(
  l: P1, op: "?!=", r: P2
): $.$expr_Operator<
  "?!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$datetime>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$datetime>>,
>(
  l: P1, op: "?!=", r: P2
): $.$expr_Operator<
  "?!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
>(
  l: P1, op: "?!=", r: P2
): $.$expr_Operator<
  "?!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$json>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$json>>,
>(
  l: P1, op: "?!=", r: P2
): $.$expr_Operator<
  "?!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
>(
  l: P1, op: "?!=", r: P2
): $.$expr_Operator<
  "?!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$uuid>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$uuid>>,
>(
  l: P1, op: "?!=", r: P2
): $.$expr_Operator<
  "?!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for inequality.
*/
declare function op<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
>(
  l: P1, op: "?!=", r: P2
): $.$expr_Operator<
  "?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
/**
* Compare two (potentially empty) values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cfg.$memory>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cfg.$memory>>,
>(
  l: P1, op: "?!=", r: P2
): $.$expr_Operator<
  "?!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_datetime>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_datetime>>,
>(
  l: P1, op: "?!=", r: P2
): $.$expr_Operator<
  "?!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_date>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_date>>,
>(
  l: P1, op: "?!=", r: P2
): $.$expr_Operator<
  "?!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_time>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_time>>,
>(
  l: P1, op: "?!=", r: P2
): $.$expr_Operator<
  "?!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
>(
  l: P1, op: "?!=", r: P2
): $.$expr_Operator<
  "?!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$anyint>>,
>(
  l: P1, op: "?!=", r: P2
): $.$expr_Operator<
  "?!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Compare two (potentially empty) values for inequality.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  l: P1, op: "?!=", r: P2
): $.$expr_Operator<
  "?!=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P1>>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<P2>>>>
>;
/**
* Greater than or equal.
*/
declare function op<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
>(
  l: P1, op: ">=", r: P2
): $.$expr_Operator<
  ">=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Greater than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bool>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bool>>,
>(
  l: P1, op: ">=", r: P2
): $.$expr_Operator<
  ">=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<$.EnumType>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<$.EnumType>>,
>(
  l: P1, op: ">=", r: P2
): $.$expr_Operator<
  ">=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  l: P1, op: ">=", r: P2
): $.$expr_Operator<
  ">=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
>(
  l: P1, op: ">=", r: P2
): $.$expr_Operator<
  ">=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than or equal.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<_std.$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<_std.$decimalλICastableTo>>,
>(
  l: P1, op: ">=", r: P2
): $.$expr_Operator<
  ">=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Greater than or equal.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
>(
  l: P1, op: ">=", r: P2
): $.$expr_Operator<
  ">=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Greater than or equal.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
>(
  l: P1, op: ">=", r: P2
): $.$expr_Operator<
  ">=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Greater than or equal.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.ArrayType<$.getPrimitiveNonArrayBaseType<P1["__element__"]["__element__"]>>>,
>(
  l: P1, op: ">=", r: P2
): $.$expr_Operator<
  ">=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Greater than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bytes>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bytes>>,
>(
  l: P1, op: ">=", r: P2
): $.$expr_Operator<
  ">=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$datetime>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$datetime>>,
>(
  l: P1, op: ">=", r: P2
): $.$expr_Operator<
  ">=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
>(
  l: P1, op: ">=", r: P2
): $.$expr_Operator<
  ">=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$json>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$json>>,
>(
  l: P1, op: ">=", r: P2
): $.$expr_Operator<
  ">=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
>(
  l: P1, op: ">=", r: P2
): $.$expr_Operator<
  ">=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$uuid>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$uuid>>,
>(
  l: P1, op: ">=", r: P2
): $.$expr_Operator<
  ">=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than or equal.
*/
declare function op<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
>(
  l: P1, op: ">=", r: P2
): $.$expr_Operator<
  ">=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Greater than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cfg.$memory>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cfg.$memory>>,
>(
  l: P1, op: ">=", r: P2
): $.$expr_Operator<
  ">=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_datetime>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_datetime>>,
>(
  l: P1, op: ">=", r: P2
): $.$expr_Operator<
  ">=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_date>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_date>>,
>(
  l: P1, op: ">=", r: P2
): $.$expr_Operator<
  ">=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_time>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_time>>,
>(
  l: P1, op: ">=", r: P2
): $.$expr_Operator<
  ">=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
>(
  l: P1, op: ">=", r: P2
): $.$expr_Operator<
  ">=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$anyint>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  l: P1, op: ">=", r: P2
): $.$expr_Operator<
  ">=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  l: P1, op: ">=", r: P2
): $.$expr_Operator<
  ">=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than.
*/
declare function op<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
>(
  l: P1, op: ">", r: P2
): $.$expr_Operator<
  ">",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Greater than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bool>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bool>>,
>(
  l: P1, op: ">", r: P2
): $.$expr_Operator<
  ">",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<$.EnumType>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<$.EnumType>>,
>(
  l: P1, op: ">", r: P2
): $.$expr_Operator<
  ">",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  l: P1, op: ">", r: P2
): $.$expr_Operator<
  ">",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
>(
  l: P1, op: ">", r: P2
): $.$expr_Operator<
  ">",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<_std.$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<_std.$decimalλICastableTo>>,
>(
  l: P1, op: ">", r: P2
): $.$expr_Operator<
  ">",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Greater than.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
>(
  l: P1, op: ">", r: P2
): $.$expr_Operator<
  ">",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Greater than.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
>(
  l: P1, op: ">", r: P2
): $.$expr_Operator<
  ">",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Greater than.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.ArrayType<$.getPrimitiveNonArrayBaseType<P1["__element__"]["__element__"]>>>,
>(
  l: P1, op: ">", r: P2
): $.$expr_Operator<
  ">",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Greater than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bytes>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bytes>>,
>(
  l: P1, op: ">", r: P2
): $.$expr_Operator<
  ">",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$datetime>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$datetime>>,
>(
  l: P1, op: ">", r: P2
): $.$expr_Operator<
  ">",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$uuid>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$uuid>>,
>(
  l: P1, op: ">", r: P2
): $.$expr_Operator<
  ">",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
>(
  l: P1, op: ">", r: P2
): $.$expr_Operator<
  ">",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$json>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$json>>,
>(
  l: P1, op: ">", r: P2
): $.$expr_Operator<
  ">",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
>(
  l: P1, op: ">", r: P2
): $.$expr_Operator<
  ">",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than.
*/
declare function op<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
>(
  l: P1, op: ">", r: P2
): $.$expr_Operator<
  ">",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Greater than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cfg.$memory>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cfg.$memory>>,
>(
  l: P1, op: ">", r: P2
): $.$expr_Operator<
  ">",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_datetime>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_datetime>>,
>(
  l: P1, op: ">", r: P2
): $.$expr_Operator<
  ">",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_date>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_date>>,
>(
  l: P1, op: ">", r: P2
): $.$expr_Operator<
  ">",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_time>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_time>>,
>(
  l: P1, op: ">", r: P2
): $.$expr_Operator<
  ">",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
>(
  l: P1, op: ">", r: P2
): $.$expr_Operator<
  ">",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$anyint>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  l: P1, op: ">", r: P2
): $.$expr_Operator<
  ">",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Greater than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  l: P1, op: ">", r: P2
): $.$expr_Operator<
  ">",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than or equal.
*/
declare function op<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
>(
  l: P1, op: "<=", r: P2
): $.$expr_Operator<
  "<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Less than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bool>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bool>>,
>(
  l: P1, op: "<=", r: P2
): $.$expr_Operator<
  "<=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<$.EnumType>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<$.EnumType>>,
>(
  l: P1, op: "<=", r: P2
): $.$expr_Operator<
  "<=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  l: P1, op: "<=", r: P2
): $.$expr_Operator<
  "<=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
>(
  l: P1, op: "<=", r: P2
): $.$expr_Operator<
  "<=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than or equal.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<_std.$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<_std.$decimalλICastableTo>>,
>(
  l: P1, op: "<=", r: P2
): $.$expr_Operator<
  "<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Less than or equal.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
>(
  l: P1, op: "<=", r: P2
): $.$expr_Operator<
  "<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Less than or equal.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
>(
  l: P1, op: "<=", r: P2
): $.$expr_Operator<
  "<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Less than or equal.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.ArrayType<$.getPrimitiveNonArrayBaseType<P1["__element__"]["__element__"]>>>,
>(
  l: P1, op: "<=", r: P2
): $.$expr_Operator<
  "<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Less than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bytes>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bytes>>,
>(
  l: P1, op: "<=", r: P2
): $.$expr_Operator<
  "<=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$datetime>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$datetime>>,
>(
  l: P1, op: "<=", r: P2
): $.$expr_Operator<
  "<=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
>(
  l: P1, op: "<=", r: P2
): $.$expr_Operator<
  "<=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$json>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$json>>,
>(
  l: P1, op: "<=", r: P2
): $.$expr_Operator<
  "<=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
>(
  l: P1, op: "<=", r: P2
): $.$expr_Operator<
  "<=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$uuid>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$uuid>>,
>(
  l: P1, op: "<=", r: P2
): $.$expr_Operator<
  "<=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than or equal.
*/
declare function op<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
>(
  l: P1, op: "<=", r: P2
): $.$expr_Operator<
  "<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Less than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cfg.$memory>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cfg.$memory>>,
>(
  l: P1, op: "<=", r: P2
): $.$expr_Operator<
  "<=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_datetime>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_datetime>>,
>(
  l: P1, op: "<=", r: P2
): $.$expr_Operator<
  "<=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_date>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_date>>,
>(
  l: P1, op: "<=", r: P2
): $.$expr_Operator<
  "<=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_time>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_time>>,
>(
  l: P1, op: "<=", r: P2
): $.$expr_Operator<
  "<=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
>(
  l: P1, op: "<=", r: P2
): $.$expr_Operator<
  "<=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$anyint>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  l: P1, op: "<=", r: P2
): $.$expr_Operator<
  "<=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than or equal.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  l: P1, op: "<=", r: P2
): $.$expr_Operator<
  "<=",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than.
*/
declare function op<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
>(
  l: P1, op: "<", r: P2
): $.$expr_Operator<
  "<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Less than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bool>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bool>>,
>(
  l: P1, op: "<", r: P2
): $.$expr_Operator<
  "<",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<$.EnumType>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<$.EnumType>>,
>(
  l: P1, op: "<", r: P2
): $.$expr_Operator<
  "<",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  l: P1, op: "<", r: P2
): $.$expr_Operator<
  "<",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
>(
  l: P1, op: "<", r: P2
): $.$expr_Operator<
  "<",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<_std.$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<_std.$decimalλICastableTo>>,
>(
  l: P1, op: "<", r: P2
): $.$expr_Operator<
  "<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Less than.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
>(
  l: P1, op: "<", r: P2
): $.$expr_Operator<
  "<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Less than.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
>(
  l: P1, op: "<", r: P2
): $.$expr_Operator<
  "<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Less than.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.ArrayType<$.getPrimitiveNonArrayBaseType<P1["__element__"]["__element__"]>>>,
>(
  l: P1, op: "<", r: P2
): $.$expr_Operator<
  "<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Less than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bytes>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bytes>>,
>(
  l: P1, op: "<", r: P2
): $.$expr_Operator<
  "<",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$datetime>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$datetime>>,
>(
  l: P1, op: "<", r: P2
): $.$expr_Operator<
  "<",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
>(
  l: P1, op: "<", r: P2
): $.$expr_Operator<
  "<",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$json>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$json>>,
>(
  l: P1, op: "<", r: P2
): $.$expr_Operator<
  "<",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
>(
  l: P1, op: "<", r: P2
): $.$expr_Operator<
  "<",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$uuid>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$uuid>>,
>(
  l: P1, op: "<", r: P2
): $.$expr_Operator<
  "<",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than.
*/
declare function op<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
>(
  l: P1, op: "<", r: P2
): $.$expr_Operator<
  "<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Less than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cfg.$memory>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cfg.$memory>>,
>(
  l: P1, op: "<", r: P2
): $.$expr_Operator<
  "<",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_datetime>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_datetime>>,
>(
  l: P1, op: "<", r: P2
): $.$expr_Operator<
  "<",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_date>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_date>>,
>(
  l: P1, op: "<", r: P2
): $.$expr_Operator<
  "<",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_time>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_time>>,
>(
  l: P1, op: "<", r: P2
): $.$expr_Operator<
  "<",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
>(
  l: P1, op: "<", r: P2
): $.$expr_Operator<
  "<",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$anyint>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  l: P1, op: "<", r: P2
): $.$expr_Operator<
  "<",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Less than.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  l: P1, op: "<", r: P2
): $.$expr_Operator<
  "<",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Logical disjunction.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bool>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bool>>,
>(
  a: P1, op: "or", b: P2
): $.$expr_Operator<
  "or",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Logical conjunction.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bool>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bool>>,
>(
  a: P1, op: "and", b: P2
): $.$expr_Operator<
  "and",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Logical negation.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bool>>,
>(
  op: "not", v: P1
): $.$expr_Operator<
  "not",
  $.OperatorKind.Prefix,
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  $.TypeSet<_std.$bool, _.castMaps.literalToTypeSet<P1>["__cardinality__"]>
>;
/**
* Arithmetic addition.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  op: "+", l: P1
): $.$expr_Operator<
  "+",
  $.OperatorKind.Prefix,
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  $.TypeSet<_std.$number, _.castMaps.literalToTypeSet<P1>["__cardinality__"]>
>;
/**
* Arithmetic addition.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
>(
  op: "+", l: P1
): $.$expr_Operator<
  "+",
  $.OperatorKind.Prefix,
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  $.TypeSet<_std.$bigint, _.castMaps.literalToTypeSet<P1>["__cardinality__"]>
>;
/**
* Arithmetic addition.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  l: P1, op: "+", r: P2
): $.$expr_Operator<
  "+",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$number, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Arithmetic addition.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
>(
  l: P1, op: "+", r: P2
): $.$expr_Operator<
  "+",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bigint, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Time interval and date/time addition.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$datetime>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
>(
  l: P1, op: "+", r: P2
): $.$expr_Operator<
  "+",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$datetime, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Time interval and date/time addition.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
>(
  l: P1, op: "+", r: P2
): $.$expr_Operator<
  "+",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$duration, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Time interval and date/time addition.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$datetime>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
>(
  l: P1, op: "+", r: P2
): $.$expr_Operator<
  "+",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$datetime, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Time interval and date/time addition.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_datetime>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
>(
  l: P1, op: "+", r: P2
): $.$expr_Operator<
  "+",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_cal.$local_datetime, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Time interval and date/time addition.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_datetime>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
>(
  l: P1, op: "+", r: P2
): $.$expr_Operator<
  "+",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_cal.$local_datetime, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Time interval and date/time addition.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_date>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
>(
  l: P1, op: "+", r: P2
): $.$expr_Operator<
  "+",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_cal.$local_date, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Time interval and date/time addition.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_date>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
>(
  l: P1, op: "+", r: P2
): $.$expr_Operator<
  "+",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_cal.$local_date, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Time interval and date/time addition.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_time>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
>(
  l: P1, op: "+", r: P2
): $.$expr_Operator<
  "+",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_cal.$local_time, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Time interval and date/time addition.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_time>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
>(
  l: P1, op: "+", r: P2
): $.$expr_Operator<
  "+",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_cal.$local_time, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Time interval and date/time addition.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
>(
  l: P1, op: "+", r: P2
): $.$expr_Operator<
  "+",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_cal.$relative_duration, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Time interval and date/time addition.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
>(
  l: P1, op: "+", r: P2
): $.$expr_Operator<
  "+",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_cal.$relative_duration, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Arithmetic addition.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  op: "+", l: P1
): $.$expr_Operator<
  "+",
  $.OperatorKind.Prefix,
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  $.TypeSet<_std.$decimal, _.castMaps.literalToTypeSet<P1>["__cardinality__"]>
>;
/**
* Arithmetic addition.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  l: P1, op: "+", r: P2
): $.$expr_Operator<
  "+",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$decimal, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Arithmetic subtraction.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  op: "-", l: P1
): $.$expr_Operator<
  "-",
  $.OperatorKind.Prefix,
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  $.TypeSet<_std.$number, _.castMaps.literalToTypeSet<P1>["__cardinality__"]>
>;
/**
* Arithmetic subtraction.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
>(
  op: "-", l: P1
): $.$expr_Operator<
  "-",
  $.OperatorKind.Prefix,
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  $.TypeSet<_std.$bigint, _.castMaps.literalToTypeSet<P1>["__cardinality__"]>
>;
/**
* Time interval and date/time subtraction.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
>(
  op: "-", v: P1
): $.$expr_Operator<
  "-",
  $.OperatorKind.Prefix,
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  $.TypeSet<_std.$duration, _.castMaps.literalToTypeSet<P1>["__cardinality__"]>
>;
/**
* Time interval and date/time subtraction.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
>(
  op: "-", v: P1
): $.$expr_Operator<
  "-",
  $.OperatorKind.Prefix,
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  $.TypeSet<_cal.$relative_duration, _.castMaps.literalToTypeSet<P1>["__cardinality__"]>
>;
/**
* Arithmetic subtraction.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  l: P1, op: "-", r: P2
): $.$expr_Operator<
  "-",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$number, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Arithmetic subtraction.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
>(
  l: P1, op: "-", r: P2
): $.$expr_Operator<
  "-",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bigint, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Time interval and date/time subtraction.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$datetime>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
>(
  l: P1, op: "-", r: P2
): $.$expr_Operator<
  "-",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$datetime, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Time interval and date/time subtraction.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$datetime>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$datetime>>,
>(
  l: P1, op: "-", r: P2
): $.$expr_Operator<
  "-",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$duration, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Time interval and date/time subtraction.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
>(
  l: P1, op: "-", r: P2
): $.$expr_Operator<
  "-",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$duration, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Time interval and date/time subtraction.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$datetime>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
>(
  l: P1, op: "-", r: P2
): $.$expr_Operator<
  "-",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$datetime, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Time interval and date/time subtraction.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_datetime>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
>(
  l: P1, op: "-", r: P2
): $.$expr_Operator<
  "-",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_cal.$local_datetime, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Time interval and date/time subtraction.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_datetime>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
>(
  l: P1, op: "-", r: P2
): $.$expr_Operator<
  "-",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_cal.$local_datetime, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Time interval and date/time subtraction.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_date>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
>(
  l: P1, op: "-", r: P2
): $.$expr_Operator<
  "-",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_cal.$local_date, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Time interval and date/time subtraction.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_date>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
>(
  l: P1, op: "-", r: P2
): $.$expr_Operator<
  "-",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_cal.$local_date, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Time interval and date/time subtraction.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_time>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
>(
  l: P1, op: "-", r: P2
): $.$expr_Operator<
  "-",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_cal.$local_time, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Time interval and date/time subtraction.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$local_time>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
>(
  l: P1, op: "-", r: P2
): $.$expr_Operator<
  "-",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_cal.$local_time, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Time interval and date/time subtraction.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
>(
  l: P1, op: "-", r: P2
): $.$expr_Operator<
  "-",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_cal.$relative_duration, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Time interval and date/time subtraction.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$duration>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_cal.$relative_duration>>,
>(
  l: P1, op: "-", r: P2
): $.$expr_Operator<
  "-",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_cal.$relative_duration, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Arithmetic subtraction.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  op: "-", l: P1
): $.$expr_Operator<
  "-",
  $.OperatorKind.Prefix,
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  $.TypeSet<_std.$decimal, _.castMaps.literalToTypeSet<P1>["__cardinality__"]>
>;
/**
* Arithmetic subtraction.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  l: P1, op: "-", r: P2
): $.$expr_Operator<
  "-",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$decimal, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Arithmetic multiplication.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  l: P1, op: "*", r: P2
): $.$expr_Operator<
  "*",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$number, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Arithmetic multiplication.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
>(
  l: P1, op: "*", r: P2
): $.$expr_Operator<
  "*",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bigint, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Arithmetic multiplication.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  l: P1, op: "*", r: P2
): $.$expr_Operator<
  "*",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$decimal, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Arithmetic division.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  l: P1, op: "/", r: P2
): $.$expr_Operator<
  "/",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$number, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Arithmetic division.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  l: P1, op: "/", r: P2
): $.$expr_Operator<
  "/",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$decimal, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Floor division. Result is rounded down to the nearest integer
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  n: P1, op: "//", d: P2
): $.$expr_Operator<
  "//",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$number, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Floor division. Result is rounded down to the nearest integer
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
>(
  n: P1, op: "//", d: P2
): $.$expr_Operator<
  "//",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bigint, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Floor division. Result is rounded down to the nearest integer
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  n: P1, op: "//", d: P2
): $.$expr_Operator<
  "//",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$decimal, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Remainder from division (modulo).
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  n: P1, op: "%", d: P2
): $.$expr_Operator<
  "%",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$number, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Remainder from division (modulo).
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
>(
  n: P1, op: "%", d: P2
): $.$expr_Operator<
  "%",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bigint, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Remainder from division (modulo).
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  n: P1, op: "%", d: P2
): $.$expr_Operator<
  "%",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$decimal, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Power operation.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  n: P1, op: "^", p: P2
): $.$expr_Operator<
  "^",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$number, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Power operation.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
>(
  n: P1, op: "^", p: P2
): $.$expr_Operator<
  "^",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$decimal, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Power operation.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  n: P1, op: "^", p: P2
): $.$expr_Operator<
  "^",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$decimal, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Test the membership of an element in a set.
*/
declare function op<
  P1 extends $.TypeSet<_std.$decimalλICastableTo>,
  P2 extends $.TypeSet<_std.$decimalλICastableTo>,
>(
  e: P1, op: "in", s: P2
): $.$expr_Operator<
  "in",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.Cardinality.One>>
>;
/**
* Test the membership of an element in a set.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<_std.$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<_std.$decimalλICastableTo>>,
>(
  e: P1, op: "in", s: P2
): $.$expr_Operator<
  "in",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.Cardinality.One>>
>;
/**
* Test the membership of an element in a set.
*/
declare function op<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
>(
  e: P1, op: "in", s: P2
): $.$expr_Operator<
  "in",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.Cardinality.One>>
>;
/**
* Test the membership of an element in a set.
*/
declare function op<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
>(
  e: P1, op: "in", s: P2
): $.$expr_Operator<
  "in",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.Cardinality.One>>
>;
/**
* Test the membership of an element in a set.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<$.BaseType>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<$.getPrimitiveBaseType<_.castMaps.literalToTypeSet<P1>["__element__"]>>>,
>(
  e: P1, op: "in", s: P2
): $.$expr_Operator<
  "in",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], $.Cardinality.One>>
>;
/**
* Test the membership of an element in a set.
*/
declare function op<
  P1 extends $.TypeSet<_std.$decimalλICastableTo>,
  P2 extends $.TypeSet<_std.$decimalλICastableTo>,
>(
  e: P1, op: "not in", s: P2
): $.$expr_Operator<
  "not in",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.Cardinality.One>>
>;
/**
* Test the membership of an element in a set.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<_std.$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<_std.$decimalλICastableTo>>,
>(
  e: P1, op: "not in", s: P2
): $.$expr_Operator<
  "not in",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.Cardinality.One>>
>;
/**
* Test the membership of an element in a set.
*/
declare function op<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
>(
  e: P1, op: "not in", s: P2
): $.$expr_Operator<
  "not in",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.Cardinality.One>>
>;
/**
* Test the membership of an element in a set.
*/
declare function op<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
>(
  e: P1, op: "not in", s: P2
): $.$expr_Operator<
  "not in",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.Cardinality.One>>
>;
/**
* Test the membership of an element in a set.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<$.BaseType>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<$.getPrimitiveBaseType<_.castMaps.literalToTypeSet<P1>["__element__"]>>>,
>(
  e: P1, op: "not in", s: P2
): $.$expr_Operator<
  "not in",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], $.Cardinality.One>>
>;
/**
* Test whether a set is not empty.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<$.BaseType>>,
>(
  op: "exists", s: P1
): $.$expr_Operator<
  "exists",
  $.OperatorKind.Prefix,
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  $.TypeSet<_std.$bool, $.Cardinality.One>
>;
/**
* Return a set without repeating any elements.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<$.BaseType>>,
>(
  op: "distinct", s: P1
): $.$expr_Operator<
  "distinct",
  $.OperatorKind.Prefix,
  _.castMaps.mapLiteralToTypeSet<[P1]>,
  $.TypeSet<$.getPrimitiveBaseType<_.castMaps.literalToTypeSet<P1>["__element__"]>, $.Cardinality.Many>
>;
/**
* Merge two sets.
*/
declare function op<
  P1 extends $.TypeSet<_std.$decimalλICastableTo>,
  P2 extends $.TypeSet<_std.$decimalλICastableTo>,
>(
  s1: P1, op: "union", s2: P2
): $.$expr_Operator<
  "union",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_.syntax.getSharedParentPrimitive<P1["__element__"], P2["__element__"]>, $.Cardinality.Many>
>;
/**
* Merge two sets.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<_std.$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<_std.$decimalλICastableTo>>,
>(
  s1: P1, op: "union", s2: P2
): $.$expr_Operator<
  "union",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_.syntax.getSharedParentPrimitive<P1["__element__"], P2["__element__"]>, $.Cardinality.Many>
>;
/**
* Merge two sets.
*/
declare function op<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
>(
  s1: P1, op: "union", s2: P2
): $.$expr_Operator<
  "union",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_.syntax.mergeObjectTypes<P1["__element__"], P2["__element__"]>, $.Cardinality.Many>
>;
/**
* Merge two sets.
*/
declare function op<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
>(
  s1: P1, op: "union", s2: P2
): $.$expr_Operator<
  "union",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_.syntax.getSharedParentPrimitive<P1["__element__"], P2["__element__"]>, $.Cardinality.Many>
>;
/**
* Merge two sets.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<$.BaseType>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<$.getPrimitiveBaseType<_.castMaps.literalToTypeSet<P1>["__element__"]>>>,
>(
  s1: P1, op: "union", s2: P2
): $.$expr_Operator<
  "union",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<$.getPrimitiveBaseType<_.castMaps.literalToTypeSet<P1>["__element__"]>, $.Cardinality.Many>
>;
/**
* Coalesce.
*/
declare function op<
  P1 extends $.TypeSet<_std.$decimalλICastableTo>,
  P2 extends $.TypeSet<_std.$decimalλICastableTo>,
>(
  l: P1, op: "??", r: P2
): $.$expr_Operator<
  "??",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_.syntax.getSharedParentPrimitive<P1["__element__"], P2["__element__"]>, $.Cardinality.Many>
>;
/**
* Coalesce.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<_std.$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<_std.$decimalλICastableTo>>,
>(
  l: P1, op: "??", r: P2
): $.$expr_Operator<
  "??",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_.syntax.getSharedParentPrimitive<P1["__element__"], P2["__element__"]>, $.Cardinality.Many>
>;
/**
* Coalesce.
*/
declare function op<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
>(
  l: P1, op: "??", r: P2
): $.$expr_Operator<
  "??",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_.syntax.mergeObjectTypes<P1["__element__"], P2["__element__"]>, $.Cardinality.Many>
>;
/**
* Coalesce.
*/
declare function op<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
>(
  l: P1, op: "??", r: P2
): $.$expr_Operator<
  "??",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_.syntax.getSharedParentPrimitive<P1["__element__"], P2["__element__"]>, $.Cardinality.Many>
>;
/**
* Coalesce.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<$.BaseType>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<$.getPrimitiveBaseType<_.castMaps.literalToTypeSet<P1>["__element__"]>>>,
>(
  l: P1, op: "??", r: P2
): $.$expr_Operator<
  "??",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<$.getPrimitiveBaseType<_.castMaps.literalToTypeSet<P1>["__element__"]>, $.Cardinality.Many>
>;
/**
* Conditionally provide one or the other result.
*/
declare function op<
  P1 extends $.TypeSet<_std.$decimalλICastableTo>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bool>>,
  P3 extends $.TypeSet<_std.$decimalλICastableTo>,
>(
  if_true: P1, op: "if", condition: P2, op2: "else", if_false: P3
): $.$expr_Operator<
  "if_else",
  $.OperatorKind.Ternary,
  _.castMaps.mapLiteralToTypeSet<[P1, P2, P3]>,
  $.TypeSet<_.syntax.getSharedParentPrimitive<P1["__element__"], P3["__element__"]>, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.orCardinalities<P1["__cardinality__"], P3["__cardinality__"]>, _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Conditionally provide one or the other result.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<_std.$decimalλICastableTo>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bool>>,
  P3 extends $.TypeSet<$.ArrayType<_std.$decimalλICastableTo>>,
>(
  if_true: P1, op: "if", condition: P2, op2: "else", if_false: P3
): $.$expr_Operator<
  "if_else",
  $.OperatorKind.Ternary,
  _.castMaps.mapLiteralToTypeSet<[P1, P2, P3]>,
  $.TypeSet<_.syntax.getSharedParentPrimitive<P1["__element__"], P3["__element__"]>, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.orCardinalities<P1["__cardinality__"], P3["__cardinality__"]>, _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Conditionally provide one or the other result.
*/
declare function op<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bool>>,
  P3 extends $.TypeSet<$.ObjectType>,
>(
  if_true: P1, op: "if", condition: P2, op2: "else", if_false: P3
): $.$expr_Operator<
  "if_else",
  $.OperatorKind.Ternary,
  _.castMaps.mapLiteralToTypeSet<[P1, P2, P3]>,
  $.TypeSet<_.syntax.mergeObjectTypes<P1["__element__"], P3["__element__"]>, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.orCardinalities<P1["__cardinality__"], P3["__cardinality__"]>, _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Conditionally provide one or the other result.
*/
declare function op<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bool>>,
  P3 extends $.TypeSet<$.AnyTupleType>,
>(
  if_true: P1, op: "if", condition: P2, op2: "else", if_false: P3
): $.$expr_Operator<
  "if_else",
  $.OperatorKind.Ternary,
  _.castMaps.mapLiteralToTypeSet<[P1, P2, P3]>,
  $.TypeSet<_.syntax.getSharedParentPrimitive<P1["__element__"], P3["__element__"]>, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.orCardinalities<P1["__cardinality__"], P3["__cardinality__"]>, _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Conditionally provide one or the other result.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<$.BaseType>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bool>>,
  P3 extends _.castMaps.orScalarLiteral<$.TypeSet<$.getPrimitiveBaseType<_.castMaps.literalToTypeSet<P1>["__element__"]>>>,
>(
  if_true: P1, op: "if", condition: P2, op2: "else", if_false: P3
): $.$expr_Operator<
  "if_else",
  $.OperatorKind.Ternary,
  _.castMaps.mapLiteralToTypeSet<[P1, P2, P3]>,
  $.TypeSet<$.getPrimitiveBaseType<_.castMaps.literalToTypeSet<P1>["__element__"]>, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.orCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P3>["__cardinality__"]>, _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Array concatenation.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<_std.$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<_std.$decimalλICastableTo>>,
>(
  l: P1, op: "++", r: P2
): $.$expr_Operator<
  "++",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$.ArrayType<_.syntax.getSharedParentPrimitive<P1["__element__"]["__element__"], P2["__element__"]["__element__"]>>, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Array concatenation.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
>(
  l: P1, op: "++", r: P2
): $.$expr_Operator<
  "++",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$.ArrayType<_.syntax.mergeObjectTypes<P1["__element__"]["__element__"], P2["__element__"]["__element__"]>>, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Array concatenation.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
>(
  l: P1, op: "++", r: P2
): $.$expr_Operator<
  "++",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$.ArrayType<_.syntax.getSharedParentPrimitive<P1["__element__"]["__element__"], P2["__element__"]["__element__"]>>, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Array concatenation.
*/
declare function op<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.ArrayType<$.getPrimitiveNonArrayBaseType<P1["__element__"]["__element__"]>>>,
>(
  l: P1, op: "++", r: P2
): $.$expr_Operator<
  "++",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$.ArrayType<$.getPrimitiveNonArrayBaseType<P1["__element__"]["__element__"]>>, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
* Bytes concatenation.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bytes>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bytes>>,
>(
  l: P1, op: "++", r: P2
): $.$expr_Operator<
  "++",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bytes, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* String concatenation.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
>(
  l: P1, op: "++", r: P2
): $.$expr_Operator<
  "++",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$str, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Concatenate two JSON values into a new JSON value.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$json>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$json>>,
>(
  l: P1, op: "++", r: P2
): $.$expr_Operator<
  "++",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$json, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Case-sensitive simple string matching.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
>(
  string: P1, op: "like", pattern: P2
): $.$expr_Operator<
  "like",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Case-insensitive simple string matching.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
>(
  string: P1, op: "ilike", pattern: P2
): $.$expr_Operator<
  "ilike",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Case-sensitive simple string matching.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
>(
  string: P1, op: "not like", pattern: P2
): $.$expr_Operator<
  "not like",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;
/**
* Case-insensitive simple string matching.
*/
declare function op<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
>(
  string: P1, op: "not ilike", pattern: P2
): $.$expr_Operator<
  "not ilike",
  $.OperatorKind.Infix,
  _.castMaps.mapLiteralToTypeSet<[P1, P2]>,
  $.TypeSet<_std.$bool, $.cardinalityUtil.multiplyCardinalities<_.castMaps.literalToTypeSet<P1>["__cardinality__"], _.castMaps.literalToTypeSet<P2>["__cardinality__"]>>
>;




export { op };
