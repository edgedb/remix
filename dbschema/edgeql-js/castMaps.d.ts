import * as edgedb from "edgedb";
import type { $ } from "edgedb";
import * as literal from "./syntax/literal";
import type * as _std from "./modules/std";
import type * as _sys from "./modules/sys";
import type * as _schema from "./modules/schema";
import type * as _cfg from "./modules/cfg";
import type * as _cal from "./modules/cal";
export declare type scalarAssignableBy<T extends $.ScalarType> =
  T extends _std.$number ? _std.$number : 
  T extends _sys.$VersionStage ? _sys.$VersionStage : 
  T extends _sys.$TransactionIsolation ? _sys.$TransactionIsolation : 
  T extends _std.$uuid ? _std.$uuid : 
  T extends _std.$str ? _std.$str : 
  T extends _std.$json ? _std.$json : 
  T extends _std.$int64 ? _std.$int64 : 
  T extends _std.$int32 ? _std.$int32 : 
  T extends _std.$int16 ? _std.$int16 : 
  T extends _std.$float64 ? _std.$float64 : 
  T extends _std.$float32 ? _std.$float32 : 
  T extends _std.$duration ? _std.$duration : 
  T extends _std.$decimal ? _std.$decimalλIAssignableBy : 
  T extends _std.$datetime ? _std.$datetime : 
  T extends _std.$bytes ? _std.$bytes : 
  T extends _std.$bool ? _std.$bool : 
  T extends _std.$bigint ? _std.$bigint : 
  T extends _std.$JsonEmpty ? _std.$JsonEmpty : 
  T extends _schema.$Volatility ? _schema.$Volatility : 
  T extends _schema.$TypeModifier ? _schema.$TypeModifier : 
  T extends _schema.$TargetDeleteAction ? _schema.$TargetDeleteAction : 
  T extends _schema.$SourceDeleteAction ? _schema.$SourceDeleteAction : 
  T extends _schema.$ParameterKind ? _schema.$ParameterKind : 
  T extends _schema.$OperatorKind ? _schema.$OperatorKind : 
  T extends _schema.$Cardinality ? _schema.$Cardinality : 
  T extends _schema.$AccessPolicyAction ? _schema.$AccessPolicyAction : 
  T extends _schema.$AccessKind ? _schema.$AccessKind : 
  T extends _cfg.$memory ? _cfg.$memory : 
  T extends _cfg.$ConnectionTransport ? _cfg.$ConnectionTransport : 
  T extends _cfg.$AllowBareDDL ? _cfg.$AllowBareDDL : 
  T extends _cal.$relative_duration ? _cal.$relative_durationλIAssignableBy : 
  T extends _cal.$local_time ? _cal.$local_time : 
  T extends _cal.$local_datetime ? _cal.$local_datetimeλIAssignableBy : 
  T extends _cal.$local_date ? _cal.$local_date : 
  T extends _cal.$date_duration ? _cal.$date_duration : 
  never

export declare type scalarCastableFrom<T extends $.ScalarType> =
  T extends _std.$number ? _std.$number : 
  T extends _sys.$VersionStage ? _sys.$VersionStage : 
  T extends _sys.$TransactionIsolation ? _sys.$TransactionIsolation : 
  T extends _std.$uuid ? _std.$uuid : 
  T extends _std.$str ? _std.$str : 
  T extends _std.$json ? _std.$json : 
  T extends _std.$int64 ? _std.$int64 : 
  T extends _std.$int32 ? _std.$int32 : 
  T extends _std.$int16 ? _std.$int16 : 
  T extends _std.$float64 ? _std.$float64 : 
  T extends _std.$float32 ? _std.$float32 : 
  T extends _std.$duration ? _std.$duration : 
  T extends _std.$decimal ? _std.$decimalλICastableTo : 
  T extends _std.$datetime ? _std.$datetime : 
  T extends _std.$bytes ? _std.$bytes : 
  T extends _std.$bool ? _std.$bool : 
  T extends _std.$bigint ? _std.$bigint : 
  T extends _std.$JsonEmpty ? _std.$JsonEmpty : 
  T extends _schema.$Volatility ? _schema.$Volatility : 
  T extends _schema.$TypeModifier ? _schema.$TypeModifier : 
  T extends _schema.$TargetDeleteAction ? _schema.$TargetDeleteAction : 
  T extends _schema.$SourceDeleteAction ? _schema.$SourceDeleteAction : 
  T extends _schema.$ParameterKind ? _schema.$ParameterKind : 
  T extends _schema.$OperatorKind ? _schema.$OperatorKind : 
  T extends _schema.$Cardinality ? _schema.$Cardinality : 
  T extends _schema.$AccessPolicyAction ? _schema.$AccessPolicyAction : 
  T extends _schema.$AccessKind ? _schema.$AccessKind : 
  T extends _cfg.$memory ? _cfg.$memory : 
  T extends _cfg.$ConnectionTransport ? _cfg.$ConnectionTransport : 
  T extends _cfg.$AllowBareDDL ? _cfg.$AllowBareDDL : 
  T extends _cal.$relative_duration ? _cal.$relative_durationλICastableTo : 
  T extends _cal.$local_time ? _cal.$local_time : 
  T extends _cal.$local_datetime ? _cal.$local_datetimeλICastableTo : 
  T extends _cal.$local_date ? _cal.$local_date : 
  T extends _cal.$date_duration ? _cal.$date_duration : 
  never

declare type getSharedParentScalar<A, B> =
  A extends _std.$number ?
    B extends _std.$number ?
    B
    :
    never
  :
  A extends _sys.$VersionStage ?
    B extends _sys.$VersionStage ?
    B
    :
    never
  :
  A extends _sys.$TransactionIsolation ?
    B extends _sys.$TransactionIsolation ?
    B
    :
    never
  :
  A extends _std.$uuid ?
    B extends _std.$uuid ?
    B
    :
    never
  :
  A extends _std.$str ?
    B extends _std.$str ?
    B
    :
    never
  :
  A extends _std.$json ?
    B extends _std.$json ?
    B
    :
    never
  :
  A extends _std.$int64 ?
    B extends _std.$int64 ?
    B
    :
    never
  :
  A extends _std.$int32 ?
    B extends _std.$int32 ?
    B
    :
    never
  :
  A extends _std.$int16 ?
    B extends _std.$int16 ?
    B
    :
    never
  :
  A extends _std.$float64 ?
    B extends _std.$float64 ?
    B
    :
    never
  :
  A extends _std.$float32 ?
    B extends _std.$float32 ?
    B
    :
    never
  :
  A extends _std.$duration ?
    B extends _std.$duration ?
    B
    :
    never
  :
  A extends _std.$decimal ?
    B extends _std.$decimal ?
    B
    :
    B extends _std.$bigint ?
    A
    :
    never
  :
  A extends _std.$datetime ?
    B extends _std.$datetime ?
    B
    :
    never
  :
  A extends _std.$bytes ?
    B extends _std.$bytes ?
    B
    :
    never
  :
  A extends _std.$bool ?
    B extends _std.$bool ?
    B
    :
    never
  :
  A extends _std.$bigint ?
    B extends _std.$decimal ?
    B
    :
    B extends _std.$bigint ?
    B
    :
    never
  :
  A extends _std.$JsonEmpty ?
    B extends _std.$JsonEmpty ?
    B
    :
    never
  :
  A extends _schema.$Volatility ?
    B extends _schema.$Volatility ?
    B
    :
    never
  :
  A extends _schema.$TypeModifier ?
    B extends _schema.$TypeModifier ?
    B
    :
    never
  :
  A extends _schema.$TargetDeleteAction ?
    B extends _schema.$TargetDeleteAction ?
    B
    :
    never
  :
  A extends _schema.$SourceDeleteAction ?
    B extends _schema.$SourceDeleteAction ?
    B
    :
    never
  :
  A extends _schema.$ParameterKind ?
    B extends _schema.$ParameterKind ?
    B
    :
    never
  :
  A extends _schema.$OperatorKind ?
    B extends _schema.$OperatorKind ?
    B
    :
    never
  :
  A extends _schema.$Cardinality ?
    B extends _schema.$Cardinality ?
    B
    :
    never
  :
  A extends _schema.$AccessPolicyAction ?
    B extends _schema.$AccessPolicyAction ?
    B
    :
    never
  :
  A extends _schema.$AccessKind ?
    B extends _schema.$AccessKind ?
    B
    :
    never
  :
  A extends _cfg.$memory ?
    B extends _cfg.$memory ?
    B
    :
    never
  :
  A extends _cfg.$ConnectionTransport ?
    B extends _cfg.$ConnectionTransport ?
    B
    :
    never
  :
  A extends _cfg.$AllowBareDDL ?
    B extends _cfg.$AllowBareDDL ?
    B
    :
    never
  :
  A extends _cal.$relative_duration ?
    B extends _cal.$relative_duration ?
    B
    :
    B extends _cal.$date_duration ?
    A
    :
    never
  :
  A extends _cal.$local_time ?
    B extends _cal.$local_time ?
    B
    :
    never
  :
  A extends _cal.$local_datetime ?
    B extends _cal.$local_datetime ?
    B
    :
    B extends _cal.$local_date ?
    A
    :
    never
  :
  A extends _cal.$local_date ?
    B extends _cal.$local_datetime ?
    B
    :
    B extends _cal.$local_date ?
    B
    :
    never
  :
  A extends _cal.$date_duration ?
    B extends _cal.$relative_duration ?
    B
    :
    B extends _cal.$date_duration ?
    B
    :
    never
  :
never

declare function getSharedParentScalar<A extends $.ScalarType, B extends $.ScalarType>(a: A, b: B): A | B

declare function isImplicitlyCastableTo(from: string, to: string): boolean
export declare type scalarLiterals =
  | number
  | string
  | boolean
  | bigint
  | Buffer
  | Date
  | edgedb.Duration
  | edgedb.LocalDateTime
  | edgedb.LocalDate
  | edgedb.LocalTime
  | edgedb.RelativeDuration
  | edgedb.DateDuration
  | edgedb.ConfigMemory
  | edgedb.Range<any>;

declare type getTsType<T extends $.BaseType> = T extends $.ScalarType
  ? T extends _std.$decimal | _std.$json | _std.$uuid
    ? never
    : T["__tstype__"]
  : T extends $.RangeType
  ? edgedb.Range<T['__element__']['__tstype__']>
  : never;
export declare type orScalarLiteral<T extends $.TypeSet> =
  | T
  | ($.BaseTypeSet extends T      ? scalarLiterals      : $.Cardinality extends T["__cardinality__"]        ? getTsType<T["__element__"]>        : $.computeTsTypeCard<            getTsType<T["__element__"]>,            T["__cardinality__"]          >);
export declare type scalarWithConstType<
  T extends $.ScalarType,
  TsConstType
> = $.ScalarType<
  T["__name__"],
  T["__tstype__"],
  TsConstType
>;
export declare type literalToScalarType<T extends any> =
  T extends number ? scalarWithConstType<_std.$number, T> :
  T extends string ? scalarWithConstType<_std.$str, T> :
  T extends boolean ? scalarWithConstType<_std.$bool, T> :
  T extends bigint ? scalarWithConstType<_std.$bigint, T> :
  T extends Buffer ? scalarWithConstType<_std.$bytes, T> :
  T extends Date ? scalarWithConstType<_std.$datetime, T> :
  T extends edgedb.Duration ? scalarWithConstType<_std.$duration, T> :
  T extends edgedb.LocalDateTime ? scalarWithConstType<_cal.$local_datetime, T> :
  T extends edgedb.LocalDate ? scalarWithConstType<_cal.$local_date, T> :
  T extends edgedb.LocalTime ? scalarWithConstType<_cal.$local_time, T> :
  T extends edgedb.RelativeDuration ? scalarWithConstType<_cal.$relative_duration, T> :
  T extends edgedb.DateDuration ? scalarWithConstType<_cal.$date_duration, T> :
  T extends edgedb.ConfigMemory ? scalarWithConstType<_cfg.$memory, T> :
  T extends edgedb.Range<infer E> ? $.RangeType<literalToScalarType<E>> :
  $.BaseType;

declare type literalToTypeSet<T extends any> = T extends $.TypeSet
  ? T
  : $.$expr_Literal<literalToScalarType<T>>;

export declare type mapLiteralToTypeSet<T> = {
  [k in keyof T]: literalToTypeSet<T[k]>;
};

declare function literalToTypeSet(type: any): $.TypeSet;


export { getSharedParentScalar, isImplicitlyCastableTo, literalToTypeSet };
