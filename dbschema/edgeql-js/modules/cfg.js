"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
const { $ } = require("edgedb");
const _ = __importStar(require("../imports"));
const $AllowBareDDLλEnum = {
  AlwaysAllow: "AlwaysAllow",
  NeverAllow: "NeverAllow",
}
const AllowBareDDL = $.makeType(_.spec, "18adf47e-0e2e-11ed-801e-c9b62b428b6a", _.syntax.literal);

const $ConnectionTransportλEnum = {
  TCP: "TCP",
  HTTP: "HTTP",
}
const ConnectionTransport = $.makeType(_.spec, "18ae7e8a-0e2e-11ed-a08a-e75a1f64d6d5", _.syntax.literal);

const memory = $.makeType(_.spec, "00000000-0000-0000-0000-000000000130", _.syntax.literal);

const $ConfigObject = $.makeType(_.spec, "18af0a4e-0e2e-11ed-8ca4-9d7667669482", _.syntax.literal);

const ConfigObject= _.syntax.$PathNode($.$toSet($ConfigObject, $.Cardinality.Many), null, true);

const $AbstractConfig = $.makeType(_.spec, "18f27482-0e2e-11ed-8ff6-25f930906b74", _.syntax.literal);

const AbstractConfig= _.syntax.$PathNode($.$toSet($AbstractConfig, $.Cardinality.Many), null, true);

const $Auth = $.makeType(_.spec, "18e008e2-0e2e-11ed-8e5a-2139cbf53aa5", _.syntax.literal);

const Auth= _.syntax.$PathNode($.$toSet($Auth, $.Cardinality.Many), null, true);

const $AuthMethod = $.makeType(_.spec, "18b7b572-0e2e-11ed-8c55-ff8e7948a792", _.syntax.literal);

const AuthMethod= _.syntax.$PathNode($.$toSet($AuthMethod, $.Cardinality.Many), null, true);

const $Config = $.makeType(_.spec, "1915d8aa-0e2e-11ed-818e-05440dae26f4", _.syntax.literal);

const Config= _.syntax.$PathNode($.$toSet($Config, $.Cardinality.Many), null, true);

const $DatabaseConfig = $.makeType(_.spec, "19623182-0e2e-11ed-9d76-bb3e161edcba", _.syntax.literal);

const DatabaseConfig= _.syntax.$PathNode($.$toSet($DatabaseConfig, $.Cardinality.Many), null, true);

const $InstanceConfig = $.makeType(_.spec, "193bdf28-0e2e-11ed-8904-771bc8a7e499", _.syntax.literal);

const InstanceConfig= _.syntax.$PathNode($.$toSet($InstanceConfig, $.Cardinality.Many), null, true);

const $JWT = $.makeType(_.spec, "18d539d0-0e2e-11ed-994a-fb2c49b1faa7", _.syntax.literal);

const JWT= _.syntax.$PathNode($.$toSet($JWT, $.Cardinality.Many), null, true);

const $SCRAM = $.makeType(_.spec, "18cab3ca-0e2e-11ed-9eee-a962f843feab", _.syntax.literal);

const SCRAM= _.syntax.$PathNode($.$toSet($SCRAM, $.Cardinality.Many), null, true);

const $Trust = $.makeType(_.spec, "18c138d6-0e2e-11ed-ba60-fd014653972c", _.syntax.literal);

const Trust= _.syntax.$PathNode($.$toSet($Trust, $.Cardinality.Many), null, true);

function get_config_json(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('cfg::get_config_json', args, _.spec, [
    {args: [], namedArgs: {"sources": {typeId: "05f91774-15ea-9001-038e-092c1cad80af", optional: true, setoftype: false, variadic: false}, "max_source": {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}}, returnTypeId: "00000000-0000-0000-0000-00000000010f"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "cfg::get_config_json",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};



Object.assign(exports, { $AllowBareDDLλEnum: $AllowBareDDLλEnum, AllowBareDDL: AllowBareDDL, $ConnectionTransportλEnum: $ConnectionTransportλEnum, ConnectionTransport: ConnectionTransport, memory: memory, $ConfigObject: $ConfigObject, ConfigObject: ConfigObject, $AbstractConfig: $AbstractConfig, AbstractConfig: AbstractConfig, $Auth: $Auth, Auth: Auth, $AuthMethod: $AuthMethod, AuthMethod: AuthMethod, $Config: $Config, Config: Config, $DatabaseConfig: $DatabaseConfig, DatabaseConfig: DatabaseConfig, $InstanceConfig: $InstanceConfig, InstanceConfig: InstanceConfig, $JWT: $JWT, JWT: JWT, $SCRAM: $SCRAM, SCRAM: SCRAM, $Trust: $Trust, Trust: Trust });

const __defaultExports = {
  "AllowBareDDL": AllowBareDDL,
  "ConnectionTransport": ConnectionTransport,
  "memory": memory,
  "ConfigObject": ConfigObject,
  "AbstractConfig": AbstractConfig,
  "Auth": Auth,
  "AuthMethod": AuthMethod,
  "Config": Config,
  "DatabaseConfig": DatabaseConfig,
  "InstanceConfig": InstanceConfig,
  "JWT": JWT,
  "SCRAM": SCRAM,
  "Trust": Trust,
  "get_config_json": get_config_json
};
exports.default = __defaultExports;
