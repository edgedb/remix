import { $ } from "edgedb";
import * as _ from "../imports";
import type * as _std from "./std";
declare enum $AllowBareDDLλEnum {
  AlwaysAllow = "AlwaysAllow",
  NeverAllow = "NeverAllow",
}
export declare type $AllowBareDDL = {
  AlwaysAllow: $.$expr_Literal<$AllowBareDDL>;
  NeverAllow: $.$expr_Literal<$AllowBareDDL>;
} & $.EnumType<"cfg::AllowBareDDL", `${$AllowBareDDLλEnum}`>;
declare const AllowBareDDL: $AllowBareDDL

export declare type $memory = $.ScalarType<"cfg::memory", _.edgedb.ConfigMemory, true>;
declare const memory: $.scalarTypeWithConstructor<$memory, never>

export declare type $ConfigObjectλShape = $.typeutil.flatten<_std.$BaseObjectλShape & {
}>;
declare type $ConfigObject = $.ObjectType<"cfg::ConfigObject", $ConfigObjectλShape, null>;
declare const $ConfigObject: $ConfigObject

declare const ConfigObject: $.$expr_PathNode<$.TypeSet<$ConfigObject, $.Cardinality.Many>, null, true> 

export declare type $AbstractConfigλShape = $.typeutil.flatten<$ConfigObjectλShape & {
  "session_idle_timeout": $.PropertyDesc<_std.$duration, $.Cardinality.One, false, false, false, true>;
  "session_idle_transaction_timeout": $.PropertyDesc<_std.$duration, $.Cardinality.One, false, false, false, true>;
  "query_execution_timeout": $.PropertyDesc<_std.$duration, $.Cardinality.One, false, false, false, false>;
  "listen_port": $.PropertyDesc<_std.$int16, $.Cardinality.One, false, false, false, true>;
  "listen_addresses": $.PropertyDesc<_std.$str, $.Cardinality.Many, false, false, false, false>;
  "auth": $.LinkDesc<$Auth, $.Cardinality.Many, {}, false, false,  false, false>;
  "allow_dml_in_functions": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne, false, false, false, true>;
  "allow_bare_ddl": $.PropertyDesc<$AllowBareDDL, $.Cardinality.AtMostOne, false, false, false, true>;
  "shared_buffers": $.PropertyDesc<$memory, $.Cardinality.AtMostOne, false, false, false, false>;
  "query_work_mem": $.PropertyDesc<$memory, $.Cardinality.AtMostOne, false, false, false, false>;
  "effective_cache_size": $.PropertyDesc<$memory, $.Cardinality.AtMostOne, false, false, false, false>;
  "effective_io_concurrency": $.PropertyDesc<_std.$int64, $.Cardinality.AtMostOne, false, false, false, false>;
  "default_statistics_target": $.PropertyDesc<_std.$int64, $.Cardinality.AtMostOne, false, false, false, false>;
}>;
declare type $AbstractConfig = $.ObjectType<"cfg::AbstractConfig", $AbstractConfigλShape, null>;
declare const $AbstractConfig: $AbstractConfig

declare const AbstractConfig: $.$expr_PathNode<$.TypeSet<$AbstractConfig, $.Cardinality.Many>, null, true> 

export declare type $AuthλShape = $.typeutil.flatten<$ConfigObjectλShape & {
  "priority": $.PropertyDesc<_std.$int64, $.Cardinality.One, true, false, true, false>;
  "user": $.PropertyDesc<_std.$str, $.Cardinality.Many, false, false, true, true>;
  "method": $.LinkDesc<$AuthMethod, $.Cardinality.AtMostOne, {}, true, false,  false, false>;
  "comment": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, true, false>;
  "<auth[is cfg::AbstractConfig]": $.LinkDesc<$AbstractConfig, $.Cardinality.Many, {}, false, false,  false, false>;
  "<auth[is cfg::Config]": $.LinkDesc<$Config, $.Cardinality.Many, {}, false, false,  false, false>;
  "<auth[is cfg::InstanceConfig]": $.LinkDesc<$InstanceConfig, $.Cardinality.Many, {}, false, false,  false, false>;
  "<auth[is cfg::DatabaseConfig]": $.LinkDesc<$DatabaseConfig, $.Cardinality.Many, {}, false, false,  false, false>;
  "<auth": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
declare type $Auth = $.ObjectType<"cfg::Auth", $AuthλShape, null>;
declare const $Auth: $Auth

declare const Auth: $.$expr_PathNode<$.TypeSet<$Auth, $.Cardinality.Many>, null, true> 

export declare type $AuthMethodλShape = $.typeutil.flatten<$ConfigObjectλShape & {
  "<method[is cfg::Auth]": $.LinkDesc<$Auth, $.Cardinality.AtMostOne, {}, true, false,  false, false>;
  "<method": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
declare type $AuthMethod = $.ObjectType<"cfg::AuthMethod", $AuthMethodλShape, null>;
declare const $AuthMethod: $AuthMethod

declare const AuthMethod: $.$expr_PathNode<$.TypeSet<$AuthMethod, $.Cardinality.Many>, null, true> 

export declare type $ConfigλShape = $.typeutil.flatten<$AbstractConfigλShape & {
}>;
declare type $Config = $.ObjectType<"cfg::Config", $ConfigλShape, null>;
declare const $Config: $Config

declare const Config: $.$expr_PathNode<$.TypeSet<$Config, $.Cardinality.Many>, null, true> 

export declare type $DatabaseConfigλShape = $.typeutil.flatten<$AbstractConfigλShape & {
}>;
declare type $DatabaseConfig = $.ObjectType<"cfg::DatabaseConfig", $DatabaseConfigλShape, null>;
declare const $DatabaseConfig: $DatabaseConfig

declare const DatabaseConfig: $.$expr_PathNode<$.TypeSet<$DatabaseConfig, $.Cardinality.Many>, null, true> 

export declare type $InstanceConfigλShape = $.typeutil.flatten<$AbstractConfigλShape & {
}>;
declare type $InstanceConfig = $.ObjectType<"cfg::InstanceConfig", $InstanceConfigλShape, null>;
declare const $InstanceConfig: $InstanceConfig

declare const InstanceConfig: $.$expr_PathNode<$.TypeSet<$InstanceConfig, $.Cardinality.Many>, null, true> 

export declare type $SCRAMλShape = $.typeutil.flatten<$AuthMethodλShape & {
}>;
declare type $SCRAM = $.ObjectType<"cfg::SCRAM", $SCRAMλShape, null>;
declare const $SCRAM: $SCRAM

declare const SCRAM: $.$expr_PathNode<$.TypeSet<$SCRAM, $.Cardinality.Many>, null, true> 

export declare type $TrustλShape = $.typeutil.flatten<$AuthMethodλShape & {
}>;
declare type $Trust = $.ObjectType<"cfg::Trust", $TrustλShape, null>;
declare const $Trust: $Trust

declare const Trust: $.$expr_PathNode<$.TypeSet<$Trust, $.Cardinality.Many>, null, true> 

declare type get_config_jsonλFuncExpr<
  NamedArgs extends {
    "sources"?: $.TypeSet<$.ArrayType<_std.$str>>,
    "max_source"?: _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
  },
> = $.$expr_Function<
  "cfg::get_config_json",
  [],
  _.castMaps.mapLiteralToTypeSet<NamedArgs>,
  $.TypeSet<_std.$json, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<NamedArgs["sources"]>, $.cardinalityUtil.optionalParamCardinality<_.castMaps.literalToTypeSet<NamedArgs["max_source"]>>>>
>;
declare function get_config_json<
  NamedArgs extends {
    "sources"?: $.TypeSet<$.ArrayType<_std.$str>>,
    "max_source"?: _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
  },
>(
  namedArgs: NamedArgs,
): get_config_jsonλFuncExpr<NamedArgs>;



export { $AllowBareDDLλEnum, AllowBareDDL, memory, $ConfigObject, ConfigObject, $AbstractConfig, AbstractConfig, $Auth, Auth, $AuthMethod, AuthMethod, $Config, Config, $DatabaseConfig, DatabaseConfig, $InstanceConfig, InstanceConfig, $SCRAM, SCRAM, $Trust, Trust };

declare type __defaultExports = {
  "AllowBareDDL": typeof AllowBareDDL;
  "memory": typeof memory;
  "ConfigObject": typeof ConfigObject;
  "AbstractConfig": typeof AbstractConfig;
  "Auth": typeof Auth;
  "AuthMethod": typeof AuthMethod;
  "Config": typeof Config;
  "DatabaseConfig": typeof DatabaseConfig;
  "InstanceConfig": typeof InstanceConfig;
  "SCRAM": typeof SCRAM;
  "Trust": typeof Trust;
  "get_config_json": typeof get_config_json
};
declare const __defaultExports: __defaultExports;
export default __defaultExports;
