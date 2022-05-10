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
const $anyscalar = $.makeType(_.spec, "eae052a8-bda6-11ec-be60-2f2cf2b2d097", _.syntax.literal);

const $anyreal = $.makeType(_.spec, "eae5c42c-bda6-11ec-9a25-bffbba56c0f4", _.syntax.literal);

const $anyfloat = $.makeType(_.spec, "eae95b28-bda6-11ec-b7bc-ffb3cc162c13", _.syntax.literal);

const $anyint = $.makeType(_.spec, "eae67af2-bda6-11ec-817b-5343efe7c32c", _.syntax.literal);

const $anynumeric = $.makeType(_.spec, "eaeb7d68-bda6-11ec-a5d8-c5ba302ddedf", _.syntax.literal);

const bigint = $.makeType(_.spec, "00000000-0000-0000-0000-000000000110", _.syntax.literal);

const bool = $.makeType(_.spec, "00000000-0000-0000-0000-000000000109", _.syntax.literal);

const bytes = $.makeType(_.spec, "00000000-0000-0000-0000-000000000102", _.syntax.literal);

const datetime = $.makeType(_.spec, "00000000-0000-0000-0000-00000000010a", _.syntax.literal);

const decimal = $.makeType(_.spec, "00000000-0000-0000-0000-000000000108", _.syntax.literal);

const duration = $.makeType(_.spec, "00000000-0000-0000-0000-00000000010e", _.syntax.literal);

const float32 = $.makeType(_.spec, "00000000-0000-0000-0000-000000000106", _.syntax.literal);

const float64 = $.makeType(_.spec, "00000000-0000-0000-0000-000000000107", _.syntax.literal);

const int16 = $.makeType(_.spec, "00000000-0000-0000-0000-000000000103", _.syntax.literal);

const int32 = $.makeType(_.spec, "00000000-0000-0000-0000-000000000104", _.syntax.literal);

const int64 = $.makeType(_.spec, "00000000-0000-0000-0000-000000000105", _.syntax.literal);

const json = $.makeType(_.spec, "00000000-0000-0000-0000-00000000010f", _.syntax.literal);

const $sequence = $.makeType(_.spec, "eaedaa98-bda6-11ec-bd3d-eb5c272cd469", _.syntax.literal);

const str = $.makeType(_.spec, "00000000-0000-0000-0000-000000000101", _.syntax.literal);

const uuid = $.makeType(_.spec, "00000000-0000-0000-0000-000000000100", _.syntax.literal);

const number = $.makeType(_.spec, "00000000-0000-0000-0000-0000000001ff", _.syntax.literal);

const $BaseObject = $.makeType(_.spec, "f1dae21c-bda6-11ec-945c-0dc522decfc4", _.syntax.literal);

const BaseObject= _.syntax.$PathNode($.$toSet($BaseObject, $.Cardinality.Many), null, true);

const $Object_f1e1d4a0bda611eca08599c7be50f4a1 = $.makeType(_.spec, "f1e1d4a0-bda6-11ec-a085-99c7be50f4a1", _.syntax.literal);

const Object_f1e1d4a0bda611eca08599c7be50f4a1= _.syntax.$PathNode($.$toSet($Object_f1e1d4a0bda611eca08599c7be50f4a1, $.Cardinality.Many), null, true);

const $FreeObject = $.makeType(_.spec, "f1ea33de-bda6-11ec-8e5e-a788d6a9d7f3", _.syntax.literal);

const FreeObject= _.syntax.$PathNode($.$toSet($FreeObject, $.Cardinality.One), null, true);

function assert_single(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::assert_single', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000001", returnTypemod: "OptionalType", preservesOptionality: true},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::assert_single",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function assert_exists(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::assert_exists', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000001", returnTypemod: "SetOfType"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::assert_exists",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function assert_distinct(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::assert_distinct', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000001", returnTypemod: "SetOfType", preservesOptionality: true},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::assert_distinct",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function len(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::len', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
    {args: [{typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::len",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function sum(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::sum', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000110"},
    {args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::sum",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function count(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::count', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::count",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function random(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::random', args, _.spec, [
    {args: [], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::random",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function min(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::min', args, _.spec, [
    {args: [{typeId: "eae5c42c-bda6-11ec-9a25-bffbba56c0f4", optional: false, setoftype: true, variadic: false}], returnTypeId: "eae5c42c-bda6-11ec-9a25-bffbba56c0f4", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "eaee6a1e-bda6-11ec-80e5-9729b54af6fd", optional: false, setoftype: true, variadic: false}], returnTypeId: "eaee6a1e-bda6-11ec-80e5-9729b54af6fd", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010a", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010e", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010b", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010c", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010d", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "44a76fab-349d-00e9-396b-1000d7e967da", optional: false, setoftype: true, variadic: false}], returnTypeId: "44a76fab-349d-00e9-396b-1000d7e967da", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "076e1d6f-f104-88b2-0632-d53171d9c827", optional: false, setoftype: true, variadic: false}], returnTypeId: "076e1d6f-f104-88b2-0632-d53171d9c827", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "82ea7b30-73d3-c79c-86fb-b253f194f53e", optional: false, setoftype: true, variadic: false}], returnTypeId: "82ea7b30-73d3-c79c-86fb-b253f194f53e", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "63acbf06-4c0c-67ac-c508-50a5ef4f4b16", optional: false, setoftype: true, variadic: false}], returnTypeId: "63acbf06-4c0c-67ac-c508-50a5ef4f4b16", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000001", returnTypemod: "OptionalType", preservesOptionality: true},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::min",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function max(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::max', args, _.spec, [
    {args: [{typeId: "eae5c42c-bda6-11ec-9a25-bffbba56c0f4", optional: false, setoftype: true, variadic: false}], returnTypeId: "eae5c42c-bda6-11ec-9a25-bffbba56c0f4", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "eaee6a1e-bda6-11ec-80e5-9729b54af6fd", optional: false, setoftype: true, variadic: false}], returnTypeId: "eaee6a1e-bda6-11ec-80e5-9729b54af6fd", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010a", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010e", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010b", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010c", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010d", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "44a76fab-349d-00e9-396b-1000d7e967da", optional: false, setoftype: true, variadic: false}], returnTypeId: "44a76fab-349d-00e9-396b-1000d7e967da", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "076e1d6f-f104-88b2-0632-d53171d9c827", optional: false, setoftype: true, variadic: false}], returnTypeId: "076e1d6f-f104-88b2-0632-d53171d9c827", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "82ea7b30-73d3-c79c-86fb-b253f194f53e", optional: false, setoftype: true, variadic: false}], returnTypeId: "82ea7b30-73d3-c79c-86fb-b253f194f53e", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "63acbf06-4c0c-67ac-c508-50a5ef4f4b16", optional: false, setoftype: true, variadic: false}], returnTypeId: "63acbf06-4c0c-67ac-c508-50a5ef4f4b16", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000001", returnTypemod: "OptionalType", preservesOptionality: true},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::max",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function all(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::all', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::all",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function any(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::any', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::any",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function enumerate(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::enumerate', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}], returnTypeId: "9c27acd9-0932-6050-c7b0-c7410e2e0a85", returnTypemod: "SetOfType", preservesOptionality: true},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::enumerate",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function round(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::round', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000110"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::round",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function contains(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::contains', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {args: [{typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::contains",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function find(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::find', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
    {args: [{typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-0000000001ff", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::find",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function array_agg(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::array_agg', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}], returnTypeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::array_agg",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function array_unpack(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::array_unpack', args, _.spec, [
    {args: [{typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000001", returnTypemod: "SetOfType"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::array_unpack",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function array_get(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::array_get', args, _.spec, [
    {args: [{typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}], namedArgs: {"default": {typeId: "00000000-0000-0000-0000-000000000001", optional: true, setoftype: false, variadic: false}}, returnTypeId: "00000000-0000-0000-0000-000000000001", returnTypemod: "OptionalType"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::array_get",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function array_join(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::array_join', args, _.spec, [
    {args: [{typeId: "05f91774-15ea-9001-038e-092c1cad80af", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::array_join",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function bytes_get_bit(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::bytes_get_bit', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::bytes_get_bit",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function datetime_current(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::datetime_current', args, _.spec, [
    {args: [], returnTypeId: "00000000-0000-0000-0000-00000000010a"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::datetime_current",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function datetime_of_transaction(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::datetime_of_transaction', args, _.spec, [
    {args: [], returnTypeId: "00000000-0000-0000-0000-00000000010a"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::datetime_of_transaction",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function datetime_of_statement(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::datetime_of_statement', args, _.spec, [
    {args: [], returnTypeId: "00000000-0000-0000-0000-00000000010a"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::datetime_of_statement",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function datetime_get(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::datetime_get', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::datetime_get",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function datetime_truncate(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::datetime_truncate', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010a"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::datetime_truncate",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function duration_truncate(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::duration_truncate', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010e"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::duration_truncate",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function duration_to_seconds(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::duration_to_seconds', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::duration_to_seconds",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function json_typeof(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::json_typeof', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::json_typeof",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function json_array_unpack(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::json_array_unpack', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010f", returnTypemod: "SetOfType"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::json_array_unpack",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function json_object_unpack(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::json_object_unpack', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}], returnTypeId: "79d8ede8-30f1-a805-fbc3-503ece3c9205", returnTypemod: "SetOfType"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::json_object_unpack",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function json_get(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::json_get', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: true}], namedArgs: {"default": {typeId: "00000000-0000-0000-0000-00000000010f", optional: true, setoftype: false, variadic: false}}, returnTypeId: "00000000-0000-0000-0000-00000000010f", returnTypemod: "OptionalType"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::json_get",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function re_match(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::re_match', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "05f91774-15ea-9001-038e-092c1cad80af"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::re_match",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function re_match_all(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::re_match_all', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "05f91774-15ea-9001-038e-092c1cad80af", returnTypemod: "SetOfType"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::re_match_all",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function re_test(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::re_test', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::re_test",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function re_replace(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::re_replace', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], namedArgs: {"flags": {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}}, returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::re_replace",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function str_repeat(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::str_repeat', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::str_repeat",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function str_lower(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::str_lower', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::str_lower",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function str_upper(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::str_upper', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::str_upper",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function str_title(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::str_title', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::str_title",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function str_pad_start(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::str_pad_start', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::str_pad_start",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function str_lpad(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::str_lpad', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::str_lpad",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function str_pad_end(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::str_pad_end', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::str_pad_end",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function str_rpad(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::str_rpad', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::str_rpad",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function str_trim_start(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::str_trim_start', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::str_trim_start",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function str_ltrim(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::str_ltrim', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::str_ltrim",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function str_trim_end(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::str_trim_end', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::str_trim_end",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function str_rtrim(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::str_rtrim', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::str_rtrim",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function str_trim(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::str_trim', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::str_trim",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function str_split(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::str_split', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "05f91774-15ea-9001-038e-092c1cad80af"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::str_split",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function uuid_generate_v1mc(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::uuid_generate_v1mc', args, _.spec, [
    {args: [], returnTypeId: "00000000-0000-0000-0000-000000000100"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::uuid_generate_v1mc",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function to_str(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::to_str', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
    {args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
    {args: [{typeId: "05f91774-15ea-9001-038e-092c1cad80af", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::to_str",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function to_json(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::to_json', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010f"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::to_json",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function to_datetime(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::to_datetime', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010a"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010a"},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010a"},
    {args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010a"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010a"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::to_datetime",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function to_duration(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::to_duration', args, _.spec, [
    {args: [], namedArgs: {"hours": {typeId: "00000000-0000-0000-0000-0000000001ff", optional: true, setoftype: false, variadic: false}, "minutes": {typeId: "00000000-0000-0000-0000-0000000001ff", optional: true, setoftype: false, variadic: false}, "seconds": {typeId: "00000000-0000-0000-0000-0000000001ff", optional: true, setoftype: false, variadic: false}, "microseconds": {typeId: "00000000-0000-0000-0000-0000000001ff", optional: true, setoftype: false, variadic: false}}, returnTypeId: "00000000-0000-0000-0000-00000000010e"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::to_duration",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function to_bigint(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::to_bigint', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000110"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::to_bigint",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function to_decimal(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::to_decimal', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::to_decimal",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function to_int64(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::to_int64', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::to_int64",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function to_int32(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::to_int32', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::to_int32",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function to_int16(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::to_int16', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::to_int16",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function to_float64(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::to_float64', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::to_float64",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function to_float32(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::to_float32', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::to_float32",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function sequence_reset(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::sequence_reset', args, _.spec, [
    {args: [{typeId: "f5bbd986-bda6-11ec-b8dc-f97457aa9573", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
    {args: [{typeId: "f5bbd986-bda6-11ec-b8dc-f97457aa9573", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::sequence_reset",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function sequence_next(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::sequence_next', args, _.spec, [
    {args: [{typeId: "f5bbd986-bda6-11ec-b8dc-f97457aa9573", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::sequence_next",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};



Object.assign(exports, { $anyscalar: $anyscalar, $anyreal: $anyreal, $anyfloat: $anyfloat, $anyint: $anyint, $anynumeric: $anynumeric, bigint: bigint, bool: bool, bytes: bytes, datetime: datetime, decimal: decimal, duration: duration, float32: float32, float64: float64, int16: int16, int32: int32, int64: int64, json: json, $sequence: $sequence, str: str, uuid: uuid, number: number, $BaseObject: $BaseObject, BaseObject: BaseObject, $Object_f1e1d4a0bda611eca08599c7be50f4a1: $Object_f1e1d4a0bda611eca08599c7be50f4a1, Object_f1e1d4a0bda611eca08599c7be50f4a1: Object_f1e1d4a0bda611eca08599c7be50f4a1, $FreeObject: $FreeObject, FreeObject: FreeObject });

const __defaultExports = {
  "bigint": bigint,
  "bool": bool,
  "bytes": bytes,
  "datetime": datetime,
  "decimal": decimal,
  "duration": duration,
  "float32": float32,
  "float64": float64,
  "int16": int16,
  "int32": int32,
  "int64": int64,
  "json": json,
  "str": str,
  "uuid": uuid,
  "BaseObject": BaseObject,
  "Object": Object_f1e1d4a0bda611eca08599c7be50f4a1,
  "FreeObject": FreeObject,
  "assert_single": assert_single,
  "assert_exists": assert_exists,
  "assert_distinct": assert_distinct,
  "len": len,
  "sum": sum,
  "count": count,
  "random": random,
  "min": min,
  "max": max,
  "all": all,
  "any": any,
  "enumerate": enumerate,
  "round": round,
  "contains": contains,
  "find": find,
  "array_agg": array_agg,
  "array_unpack": array_unpack,
  "array_get": array_get,
  "array_join": array_join,
  "bytes_get_bit": bytes_get_bit,
  "datetime_current": datetime_current,
  "datetime_of_transaction": datetime_of_transaction,
  "datetime_of_statement": datetime_of_statement,
  "datetime_get": datetime_get,
  "datetime_truncate": datetime_truncate,
  "duration_truncate": duration_truncate,
  "duration_to_seconds": duration_to_seconds,
  "json_typeof": json_typeof,
  "json_array_unpack": json_array_unpack,
  "json_object_unpack": json_object_unpack,
  "json_get": json_get,
  "re_match": re_match,
  "re_match_all": re_match_all,
  "re_test": re_test,
  "re_replace": re_replace,
  "str_repeat": str_repeat,
  "str_lower": str_lower,
  "str_upper": str_upper,
  "str_title": str_title,
  "str_pad_start": str_pad_start,
  "str_lpad": str_lpad,
  "str_pad_end": str_pad_end,
  "str_rpad": str_rpad,
  "str_trim_start": str_trim_start,
  "str_ltrim": str_ltrim,
  "str_trim_end": str_trim_end,
  "str_rtrim": str_rtrim,
  "str_trim": str_trim,
  "str_split": str_split,
  "uuid_generate_v1mc": uuid_generate_v1mc,
  "to_str": to_str,
  "to_json": to_json,
  "to_datetime": to_datetime,
  "to_duration": to_duration,
  "to_bigint": to_bigint,
  "to_decimal": to_decimal,
  "to_int64": to_int64,
  "to_int32": to_int32,
  "to_int16": to_int16,
  "to_float64": to_float64,
  "to_float32": to_float32,
  "sequence_reset": sequence_reset,
  "sequence_next": sequence_next
};
exports.default = __defaultExports;
