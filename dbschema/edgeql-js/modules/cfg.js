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
const AllowBareDDL = $.makeType(_.spec, "fa8db812-bda6-11ec-862f-61122383b523", _.syntax.literal);

const memory = $.makeType(_.spec, "00000000-0000-0000-0000-000000000130", _.syntax.literal);

const $ConfigObject = $.makeType(_.spec, "fa36d66e-bda6-11ec-9c4f-2394f89ffe3a", _.syntax.literal);

const ConfigObject= _.syntax.$PathNode($.$toSet($ConfigObject, $.Cardinality.Many), null, true);

const $AbstractConfig = $.makeType(_.spec, "fab45ae4-bda6-11ec-b4ea-475428eadc88", _.syntax.literal);

const AbstractConfig= _.syntax.$PathNode($.$toSet($AbstractConfig, $.Cardinality.Many), null, true);

const $Auth = $.makeType(_.spec, "fa8eec28-bda6-11ec-9600-e3e67347fce0", _.syntax.literal);

const Auth= _.syntax.$PathNode($.$toSet($Auth, $.Cardinality.Many), null, true);

const $AuthMethod = $.makeType(_.spec, "fa4c1196-bda6-11ec-9598-bba0d78c8331", _.syntax.literal);

const AuthMethod= _.syntax.$PathNode($.$toSet($AuthMethod, $.Cardinality.Many), null, true);

const $Config = $.makeType(_.spec, "faf14076-bda6-11ec-aff3-c3f2f4b0aeee", _.syntax.literal);

const Config= _.syntax.$PathNode($.$toSet($Config, $.Cardinality.Many), null, true);

const $DatabaseConfig = $.makeType(_.spec, "fb71442e-bda6-11ec-9da1-f7a3f956eb41", _.syntax.literal);

const DatabaseConfig= _.syntax.$PathNode($.$toSet($DatabaseConfig, $.Cardinality.Many), null, true);

const $InstanceConfig = $.makeType(_.spec, "fb30b12a-bda6-11ec-8aa7-976d7ea84892", _.syntax.literal);

const InstanceConfig= _.syntax.$PathNode($.$toSet($InstanceConfig, $.Cardinality.Many), null, true);

const $SCRAM = $.makeType(_.spec, "fa7776f6-bda6-11ec-b937-2b9e97a4c821", _.syntax.literal);

const SCRAM= _.syntax.$PathNode($.$toSet($SCRAM, $.Cardinality.Many), null, true);

const $Trust = $.makeType(_.spec, "fa618e5e-bda6-11ec-a2be-5b29efaf56c7", _.syntax.literal);

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



Object.assign(exports, { $AllowBareDDLλEnum: $AllowBareDDLλEnum, AllowBareDDL: AllowBareDDL, memory: memory, $ConfigObject: $ConfigObject, ConfigObject: ConfigObject, $AbstractConfig: $AbstractConfig, AbstractConfig: AbstractConfig, $Auth: $Auth, Auth: Auth, $AuthMethod: $AuthMethod, AuthMethod: AuthMethod, $Config: $Config, Config: Config, $DatabaseConfig: $DatabaseConfig, DatabaseConfig: DatabaseConfig, $InstanceConfig: $InstanceConfig, InstanceConfig: InstanceConfig, $SCRAM: $SCRAM, SCRAM: SCRAM, $Trust: $Trust, Trust: Trust });

const __defaultExports = {
  "AllowBareDDL": AllowBareDDL,
  "memory": memory,
  "ConfigObject": ConfigObject,
  "AbstractConfig": AbstractConfig,
  "Auth": Auth,
  "AuthMethod": AuthMethod,
  "Config": Config,
  "DatabaseConfig": DatabaseConfig,
  "InstanceConfig": InstanceConfig,
  "SCRAM": SCRAM,
  "Trust": Trust,
  "get_config_json": get_config_json
};
exports.default = __defaultExports;
