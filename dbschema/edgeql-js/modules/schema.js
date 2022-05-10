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
const $CardinalityλEnum = {
  One: "One",
  Many: "Many",
}
const Cardinality = $.makeType(_.spec, "f267a21a-bda6-11ec-85e9-31770a5a2c0f", _.syntax.literal);

const $OperatorKindλEnum = {
  Infix: "Infix",
  Postfix: "Postfix",
  Prefix: "Prefix",
  Ternary: "Ternary",
}
const OperatorKind = $.makeType(_.spec, "f2693bf2-bda6-11ec-bb13-b5ef6930567c", _.syntax.literal);

const $ParameterKindλEnum = {
  VariadicParam: "VariadicParam",
  NamedOnlyParam: "NamedOnlyParam",
  PositionalParam: "PositionalParam",
}
const ParameterKind = $.makeType(_.spec, "f26acea4-bda6-11ec-91b4-cb5295edeb8f", _.syntax.literal);

const $TargetDeleteActionλEnum = {
  Restrict: "Restrict",
  DeleteSource: "DeleteSource",
  Allow: "Allow",
  DeferredRestrict: "DeferredRestrict",
}
const TargetDeleteAction = $.makeType(_.spec, "f268729e-bda6-11ec-b43a-edcfbfaa5880", _.syntax.literal);

const $TypeModifierλEnum = {
  SetOfType: "SetOfType",
  OptionalType: "OptionalType",
  SingletonType: "SingletonType",
}
const TypeModifier = $.makeType(_.spec, "f26b9e42-bda6-11ec-9417-c7df83d7df9f", _.syntax.literal);

const $VolatilityλEnum = {
  Immutable: "Immutable",
  Stable: "Stable",
  Volatile: "Volatile",
}
const Volatility = $.makeType(_.spec, "f26a05dc-bda6-11ec-a27d-0b05559a8862", _.syntax.literal);

const $Object_f26c9afebda611eca74dc1160a60a2d8 = $.makeType(_.spec, "f26c9afe-bda6-11ec-a74d-c1160a60a2d8", _.syntax.literal);

const Object_f26c9afebda611eca74dc1160a60a2d8= _.syntax.$PathNode($.$toSet($Object_f26c9afebda611eca74dc1160a60a2d8, $.Cardinality.Many), null, true);

const $AnnotationSubject = $.makeType(_.spec, "f3c47c46-bda6-11ec-90b3-b1fcddd52a4b", _.syntax.literal);

const AnnotationSubject= _.syntax.$PathNode($.$toSet($AnnotationSubject, $.Cardinality.Many), null, true);

const $Alias = $.makeType(_.spec, "f595ca52-bda6-11ec-a89d-7db78ed7f1a6", _.syntax.literal);

const Alias= _.syntax.$PathNode($.$toSet($Alias, $.Cardinality.Many), null, true);

const $SubclassableObject = $.makeType(_.spec, "f279599c-bda6-11ec-9d30-d99f779a2d0b", _.syntax.literal);

const SubclassableObject= _.syntax.$PathNode($.$toSet($SubclassableObject, $.Cardinality.Many), null, true);

const $InheritingObject = $.makeType(_.spec, "f3e0e55c-bda6-11ec-8415-f95288fe02a3", _.syntax.literal);

const InheritingObject= _.syntax.$PathNode($.$toSet($InheritingObject, $.Cardinality.Many), null, true);

const $Annotation = $.makeType(_.spec, "f3af283c-bda6-11ec-9b14-998c69285076", _.syntax.literal);

const Annotation= _.syntax.$PathNode($.$toSet($Annotation, $.Cardinality.Many), null, true);

const $Type = $.makeType(_.spec, "f28c6226-bda6-11ec-8630-914bc003340d", _.syntax.literal);

const Type= _.syntax.$PathNode($.$toSet($Type, $.Cardinality.Many), null, true);

const $PrimitiveType = $.makeType(_.spec, "f2f6d502-bda6-11ec-8ecb-371fc06a94bd", _.syntax.literal);

const PrimitiveType= _.syntax.$PathNode($.$toSet($PrimitiveType, $.Cardinality.Many), null, true);

const $CollectionType = $.makeType(_.spec, "f316065c-bda6-11ec-abc0-212a631969ca", _.syntax.literal);

const CollectionType= _.syntax.$PathNode($.$toSet($CollectionType, $.Cardinality.Many), null, true);

const $Array = $.makeType(_.spec, "f335615a-bda6-11ec-8bcc-77383e0c7101", _.syntax.literal);

const Array= _.syntax.$PathNode($.$toSet($Array, $.Cardinality.Many), null, true);

const $CallableObject = $.makeType(_.spec, "f4549f06-bda6-11ec-8965-9b8f51d4e8e7", _.syntax.literal);

const CallableObject= _.syntax.$PathNode($.$toSet($CallableObject, $.Cardinality.Many), null, true);

const $VolatilitySubject = $.makeType(_.spec, "f47d5324-bda6-11ec-bb07-a910b74573ac", _.syntax.literal);

const VolatilitySubject= _.syntax.$PathNode($.$toSet($VolatilitySubject, $.Cardinality.Many), null, true);

const $Cast = $.makeType(_.spec, "f80b1756-bda6-11ec-8ce3-0d83f0430521", _.syntax.literal);

const Cast= _.syntax.$PathNode($.$toSet($Cast, $.Cardinality.Many), null, true);

const $ConsistencySubject = $.makeType(_.spec, "f4db97e0-bda6-11ec-8030-6b127f9e3775", _.syntax.literal);

const ConsistencySubject= _.syntax.$PathNode($.$toSet($ConsistencySubject, $.Cardinality.Many), null, true);

const $Constraint = $.makeType(_.spec, "f49572ba-bda6-11ec-ac29-ef9c0a94eee0", _.syntax.literal);

const Constraint= _.syntax.$PathNode($.$toSet($Constraint, $.Cardinality.Many), null, true);

const $Delta = $.makeType(_.spec, "f3976a58-bda6-11ec-b52f-894601d512f0", _.syntax.literal);

const Delta= _.syntax.$PathNode($.$toSet($Delta, $.Cardinality.Many), null, true);

const $Extension = $.makeType(_.spec, "f86f5c66-bda6-11ec-91f7-edbe34e970a7", _.syntax.literal);

const Extension= _.syntax.$PathNode($.$toSet($Extension, $.Cardinality.Many), null, true);

const $Function = $.makeType(_.spec, "f7950d18-bda6-11ec-a49d-7128961b0a7c", _.syntax.literal);

const Function= _.syntax.$PathNode($.$toSet($Function, $.Cardinality.Many), null, true);

const $Index = $.makeType(_.spec, "f5038836-bda6-11ec-9f85-ab45185ffac5", _.syntax.literal);

const Index= _.syntax.$PathNode($.$toSet($Index, $.Cardinality.Many), null, true);

const $Pointer = $.makeType(_.spec, "f5425aca-bda6-11ec-b30c-cbeb6cbdc145", _.syntax.literal);

const Pointer= _.syntax.$PathNode($.$toSet($Pointer, $.Cardinality.Many), null, true);

const $Source = $.makeType(_.spec, "f5245110-bda6-11ec-b445-af8660a83c82", _.syntax.literal);

const Source= _.syntax.$PathNode($.$toSet($Source, $.Cardinality.Many), null, true);

const $Link = $.makeType(_.spec, "f686de24-bda6-11ec-a12b-6be4d2186be8", _.syntax.literal);

const Link= _.syntax.$PathNode($.$toSet($Link, $.Cardinality.Many), null, true);

const $Migration = $.makeType(_.spec, "f83f9468-bda6-11ec-a90c-9d8338b12606", _.syntax.literal);

const Migration= _.syntax.$PathNode($.$toSet($Migration, $.Cardinality.Many), null, true);

const $Module = $.makeType(_.spec, "f2e49400-bda6-11ec-a058-f50a7c2c92dc", _.syntax.literal);

const Module= _.syntax.$PathNode($.$toSet($Module, $.Cardinality.Many), null, true);

const $ObjectType = $.makeType(_.spec, "f612acca-bda6-11ec-8e5f-3563f6b3294c", _.syntax.literal);

const ObjectType= _.syntax.$PathNode($.$toSet($ObjectType, $.Cardinality.Many), null, true);

const $Operator = $.makeType(_.spec, "f7cd94ee-bda6-11ec-834f-2dea7fcbba26", _.syntax.literal);

const Operator= _.syntax.$PathNode($.$toSet($Operator, $.Cardinality.Many), null, true);

const $Parameter = $.makeType(_.spec, "f4084fc0-bda6-11ec-bc15-7f963fbda5ef", _.syntax.literal);

const Parameter= _.syntax.$PathNode($.$toSet($Parameter, $.Cardinality.Many), null, true);

const $Property = $.makeType(_.spec, "f6f1a7fe-bda6-11ec-a8a2-a73fdce85469", _.syntax.literal);

const Property= _.syntax.$PathNode($.$toSet($Property, $.Cardinality.Many), null, true);

const $PseudoType = $.makeType(_.spec, "f2a0cfe0-bda6-11ec-8507-85d546b9ab22", _.syntax.literal);

const PseudoType= _.syntax.$PathNode($.$toSet($PseudoType, $.Cardinality.Many), null, true);

const $ScalarType = $.makeType(_.spec, "f5bbd986-bda6-11ec-b8dc-f97457aa9573", _.syntax.literal);

const ScalarType= _.syntax.$PathNode($.$toSet($ScalarType, $.Cardinality.Many), null, true);

const $Tuple = $.makeType(_.spec, "f36cf854-bda6-11ec-8c61-b59045727fda", _.syntax.literal);

const Tuple= _.syntax.$PathNode($.$toSet($Tuple, $.Cardinality.Many), null, true);

const $TupleElement = $.makeType(_.spec, "f35c454a-bda6-11ec-8425-5358c61c18d6", _.syntax.literal);

const TupleElement= _.syntax.$PathNode($.$toSet($TupleElement, $.Cardinality.Many), null, true);



Object.assign(exports, { $CardinalityλEnum: $CardinalityλEnum, Cardinality: Cardinality, $OperatorKindλEnum: $OperatorKindλEnum, OperatorKind: OperatorKind, $ParameterKindλEnum: $ParameterKindλEnum, ParameterKind: ParameterKind, $TargetDeleteActionλEnum: $TargetDeleteActionλEnum, TargetDeleteAction: TargetDeleteAction, $TypeModifierλEnum: $TypeModifierλEnum, TypeModifier: TypeModifier, $VolatilityλEnum: $VolatilityλEnum, Volatility: Volatility, $Object_f26c9afebda611eca74dc1160a60a2d8: $Object_f26c9afebda611eca74dc1160a60a2d8, Object_f26c9afebda611eca74dc1160a60a2d8: Object_f26c9afebda611eca74dc1160a60a2d8, $AnnotationSubject: $AnnotationSubject, AnnotationSubject: AnnotationSubject, $Alias: $Alias, Alias: Alias, $SubclassableObject: $SubclassableObject, SubclassableObject: SubclassableObject, $InheritingObject: $InheritingObject, InheritingObject: InheritingObject, $Annotation: $Annotation, Annotation: Annotation, $Type: $Type, Type: Type, $PrimitiveType: $PrimitiveType, PrimitiveType: PrimitiveType, $CollectionType: $CollectionType, CollectionType: CollectionType, $Array: $Array, Array: Array, $CallableObject: $CallableObject, CallableObject: CallableObject, $VolatilitySubject: $VolatilitySubject, VolatilitySubject: VolatilitySubject, $Cast: $Cast, Cast: Cast, $ConsistencySubject: $ConsistencySubject, ConsistencySubject: ConsistencySubject, $Constraint: $Constraint, Constraint: Constraint, $Delta: $Delta, Delta: Delta, $Extension: $Extension, Extension: Extension, $Function: $Function, Function: Function, $Index: $Index, Index: Index, $Pointer: $Pointer, Pointer: Pointer, $Source: $Source, Source: Source, $Link: $Link, Link: Link, $Migration: $Migration, Migration: Migration, $Module: $Module, Module: Module, $ObjectType: $ObjectType, ObjectType: ObjectType, $Operator: $Operator, Operator: Operator, $Parameter: $Parameter, Parameter: Parameter, $Property: $Property, Property: Property, $PseudoType: $PseudoType, PseudoType: PseudoType, $ScalarType: $ScalarType, ScalarType: ScalarType, $Tuple: $Tuple, Tuple: Tuple, $TupleElement: $TupleElement, TupleElement: TupleElement });

const __defaultExports = {
  "Cardinality": Cardinality,
  "OperatorKind": OperatorKind,
  "ParameterKind": ParameterKind,
  "TargetDeleteAction": TargetDeleteAction,
  "TypeModifier": TypeModifier,
  "Volatility": Volatility,
  "Object": Object_f26c9afebda611eca74dc1160a60a2d8,
  "AnnotationSubject": AnnotationSubject,
  "Alias": Alias,
  "SubclassableObject": SubclassableObject,
  "InheritingObject": InheritingObject,
  "Annotation": Annotation,
  "Type": Type,
  "PrimitiveType": PrimitiveType,
  "CollectionType": CollectionType,
  "Array": Array,
  "CallableObject": CallableObject,
  "VolatilitySubject": VolatilitySubject,
  "Cast": Cast,
  "ConsistencySubject": ConsistencySubject,
  "Constraint": Constraint,
  "Delta": Delta,
  "Extension": Extension,
  "Function": Function,
  "Index": Index,
  "Pointer": Pointer,
  "Source": Source,
  "Link": Link,
  "Migration": Migration,
  "Module": Module,
  "ObjectType": ObjectType,
  "Operator": Operator,
  "Parameter": Parameter,
  "Property": Property,
  "PseudoType": PseudoType,
  "ScalarType": ScalarType,
  "Tuple": Tuple,
  "TupleElement": TupleElement
};
exports.default = __defaultExports;
