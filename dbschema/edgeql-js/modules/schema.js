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
const $AccessKindλEnum = {
  Select: "Select",
  UpdateRead: "UpdateRead",
  UpdateWrite: "UpdateWrite",
  Delete: "Delete",
  Insert: "Insert",
}
const AccessKind = $.makeType(_.spec, "1371cc56-0e2e-11ed-81bc-db0f8a0dee3e", _.syntax.literal);

const $AccessPolicyActionλEnum = {
  Allow: "Allow",
  Deny: "Deny",
}
const AccessPolicyAction = $.makeType(_.spec, "13714218-0e2e-11ed-b757-5370f873b91d", _.syntax.literal);

const $CardinalityλEnum = {
  One: "One",
  Many: "Many",
}
const Cardinality = $.makeType(_.spec, "136d9078-0e2e-11ed-9643-03a4270a0475", _.syntax.literal);

const $OperatorKindλEnum = {
  Infix: "Infix",
  Postfix: "Postfix",
  Prefix: "Prefix",
  Ternary: "Ternary",
}
const OperatorKind = $.makeType(_.spec, "136f25aa-0e2e-11ed-a422-e90c067be461", _.syntax.literal);

const $ParameterKindλEnum = {
  VariadicParam: "VariadicParam",
  NamedOnlyParam: "NamedOnlyParam",
  PositionalParam: "PositionalParam",
}
const ParameterKind = $.makeType(_.spec, "1370367a-0e2e-11ed-9b26-0bd236af0948", _.syntax.literal);

const $SourceDeleteActionλEnum = {
  DeleteTarget: "DeleteTarget",
  Allow: "Allow",
  DeleteTargetIfOrphan: "DeleteTargetIfOrphan",
}
const SourceDeleteAction = $.makeType(_.spec, "136e9ef0-0e2e-11ed-bc3c-d90d13132cbc", _.syntax.literal);

const $TargetDeleteActionλEnum = {
  Restrict: "Restrict",
  DeleteSource: "DeleteSource",
  Allow: "Allow",
  DeferredRestrict: "DeferredRestrict",
}
const TargetDeleteAction = $.makeType(_.spec, "136e1868-0e2e-11ed-93e2-253c01abd083", _.syntax.literal);

const $TypeModifierλEnum = {
  SetOfType: "SetOfType",
  OptionalType: "OptionalType",
  SingletonType: "SingletonType",
}
const TypeModifier = $.makeType(_.spec, "1370bc8a-0e2e-11ed-9a84-9da79b3ddd23", _.syntax.literal);

const $VolatilityλEnum = {
  Immutable: "Immutable",
  Stable: "Stable",
  Volatile: "Volatile",
}
const Volatility = $.makeType(_.spec, "136fb060-0e2e-11ed-89f0-d7259813f600", _.syntax.literal);

const $Object_137270700e2e11ed93dedb53acd9287b = $.makeType(_.spec, "13727070-0e2e-11ed-93de-db53acd9287b", _.syntax.literal);

const Object_137270700e2e11ed93dedb53acd9287b= _.syntax.$PathNode($.$toSet($Object_137270700e2e11ed93dedb53acd9287b, $.Cardinality.Many), null, true);

const $SubclassableObject = $.makeType(_.spec, "137aba64-0e2e-11ed-aa50-b5f59285210d", _.syntax.literal);

const SubclassableObject= _.syntax.$PathNode($.$toSet($SubclassableObject, $.Cardinality.Many), null, true);

const $InheritingObject = $.makeType(_.spec, "146b231e-0e2e-11ed-9d6a-4bda26b37c35", _.syntax.literal);

const InheritingObject= _.syntax.$PathNode($.$toSet($InheritingObject, $.Cardinality.Many), null, true);

const $AnnotationSubject = $.makeType(_.spec, "144c821a-0e2e-11ed-b01d-9bdc7c5e7829", _.syntax.literal);

const AnnotationSubject= _.syntax.$PathNode($.$toSet($AnnotationSubject, $.Cardinality.Many), null, true);

const $AccessPolicy = $.makeType(_.spec, "1545ce10-0e2e-11ed-ac64-794f3d7e8b2f", _.syntax.literal);

const AccessPolicy= _.syntax.$PathNode($.$toSet($AccessPolicy, $.Cardinality.Many), null, true);

const $Alias = $.makeType(_.spec, "156b5784-0e2e-11ed-a6d6-5d48a3fceec5", _.syntax.literal);

const Alias= _.syntax.$PathNode($.$toSet($Alias, $.Cardinality.Many), null, true);

const $Annotation = $.makeType(_.spec, "1455f57a-0e2e-11ed-aff7-e58cb9978074", _.syntax.literal);

const Annotation= _.syntax.$PathNode($.$toSet($Annotation, $.Cardinality.Many), null, true);

const $Type = $.makeType(_.spec, "13877c9a-0e2e-11ed-800e-1f35267cd2c1", _.syntax.literal);

const Type= _.syntax.$PathNode($.$toSet($Type, $.Cardinality.Many), null, true);

const $PrimitiveType = $.makeType(_.spec, "13b50b24-0e2e-11ed-b44d-e370d4450d0a", _.syntax.literal);

const PrimitiveType= _.syntax.$PathNode($.$toSet($PrimitiveType, $.Cardinality.Many), null, true);

const $CollectionType = $.makeType(_.spec, "13e7d90a-0e2e-11ed-a333-a72d8d0e9934", _.syntax.literal);

const CollectionType= _.syntax.$PathNode($.$toSet($CollectionType, $.Cardinality.Many), null, true);

const $Array = $.makeType(_.spec, "13f8a834-0e2e-11ed-9939-3908957d47e1", _.syntax.literal);

const Array= _.syntax.$PathNode($.$toSet($Array, $.Cardinality.Many), null, true);

const $CallableObject = $.makeType(_.spec, "149021d2-0e2e-11ed-96d0-0965b746319a", _.syntax.literal);

const CallableObject= _.syntax.$PathNode($.$toSet($CallableObject, $.Cardinality.Many), null, true);

const $VolatilitySubject = $.makeType(_.spec, "14a64ec6-0e2e-11ed-94b6-a924f69fd430", _.syntax.literal);

const VolatilitySubject= _.syntax.$PathNode($.$toSet($VolatilitySubject, $.Cardinality.Many), null, true);

const $Cast = $.makeType(_.spec, "178ff3d0-0e2e-11ed-ae47-6d23a41fd0fc", _.syntax.literal);

const Cast= _.syntax.$PathNode($.$toSet($Cast, $.Cardinality.Many), null, true);

const $ConsistencySubject = $.makeType(_.spec, "14d9dac0-0e2e-11ed-b63a-5f815e719d40", _.syntax.literal);

const ConsistencySubject= _.syntax.$PathNode($.$toSet($ConsistencySubject, $.Cardinality.Many), null, true);

const $Constraint = $.makeType(_.spec, "14b14dee-0e2e-11ed-82ec-9390745a3bc9", _.syntax.literal);

const Constraint= _.syntax.$PathNode($.$toSet($Constraint, $.Cardinality.Many), null, true);

const $Delta = $.makeType(_.spec, "1440ea40-0e2e-11ed-9b3a-715ea7c75976", _.syntax.literal);

const Delta= _.syntax.$PathNode($.$toSet($Delta, $.Cardinality.Many), null, true);

const $Extension = $.makeType(_.spec, "17c9a878-0e2e-11ed-93cc-593b7e7d2ae4", _.syntax.literal);

const Extension= _.syntax.$PathNode($.$toSet($Extension, $.Cardinality.Many), null, true);

const $Function = $.makeType(_.spec, "1748908a-0e2e-11ed-a295-254ecc42b736", _.syntax.literal);

const Function= _.syntax.$PathNode($.$toSet($Function, $.Cardinality.Many), null, true);

const $Global = $.makeType(_.spec, "172c7760-0e2e-11ed-b2bf-43929fefb245", _.syntax.literal);

const Global= _.syntax.$PathNode($.$toSet($Global, $.Cardinality.Many), null, true);

const $Index = $.makeType(_.spec, "14ed8520-0e2e-11ed-8b10-234da9b6fa07", _.syntax.literal);

const Index= _.syntax.$PathNode($.$toSet($Index, $.Cardinality.Many), null, true);

const $Pointer = $.makeType(_.spec, "151cef90-0e2e-11ed-a342-058585317b48", _.syntax.literal);

const Pointer= _.syntax.$PathNode($.$toSet($Pointer, $.Cardinality.Many), null, true);

const $Source = $.makeType(_.spec, "150c039c-0e2e-11ed-81bc-5944dcde541e", _.syntax.literal);

const Source= _.syntax.$PathNode($.$toSet($Source, $.Cardinality.Many), null, true);

const $Link = $.makeType(_.spec, "16697882-0e2e-11ed-9c18-eb534f1bf3f9", _.syntax.literal);

const Link= _.syntax.$PathNode($.$toSet($Link, $.Cardinality.Many), null, true);

const $Migration = $.makeType(_.spec, "17af6e4a-0e2e-11ed-a900-d322a4e0427f", _.syntax.literal);

const Migration= _.syntax.$PathNode($.$toSet($Migration, $.Cardinality.Many), null, true);

const $Module = $.makeType(_.spec, "13ac473c-0e2e-11ed-afe3-bfb034255438", _.syntax.literal);

const Module= _.syntax.$PathNode($.$toSet($Module, $.Cardinality.Many), null, true);

const $ObjectType = $.makeType(_.spec, "15b0472c-0e2e-11ed-bccc-f329f3396ede", _.syntax.literal);

const ObjectType= _.syntax.$PathNode($.$toSet($ObjectType, $.Cardinality.Many), null, true);

const $Operator = $.makeType(_.spec, "176d97fe-0e2e-11ed-8d34-41ce2daf2c26", _.syntax.literal);

const Operator= _.syntax.$PathNode($.$toSet($Operator, $.Cardinality.Many), null, true);

const $Parameter = $.makeType(_.spec, "1480f5cc-0e2e-11ed-93db-f7ea434f9490", _.syntax.literal);

const Parameter= _.syntax.$PathNode($.$toSet($Parameter, $.Cardinality.Many), null, true);

const $Property = $.makeType(_.spec, "16a819f2-0e2e-11ed-a546-6f259e7c3aec", _.syntax.literal);

const Property= _.syntax.$PathNode($.$toSet($Property, $.Cardinality.Many), null, true);

const $PseudoType = $.makeType(_.spec, "139473d2-0e2e-11ed-8b42-bd71e6f06dd9", _.syntax.literal);

const PseudoType= _.syntax.$PathNode($.$toSet($PseudoType, $.Cardinality.Many), null, true);

const $Range = $.makeType(_.spec, "142c5cce-0e2e-11ed-a373-dbff5e720d9b", _.syntax.literal);

const Range= _.syntax.$PathNode($.$toSet($Range, $.Cardinality.Many), null, true);

const $ScalarType = $.makeType(_.spec, "157fed70-0e2e-11ed-a5d7-872917420bb8", _.syntax.literal);

const ScalarType= _.syntax.$PathNode($.$toSet($ScalarType, $.Cardinality.Many), null, true);

const $Tuple = $.makeType(_.spec, "141508a8-0e2e-11ed-83a7-6f80a2b57cc7", _.syntax.literal);

const Tuple= _.syntax.$PathNode($.$toSet($Tuple, $.Cardinality.Many), null, true);

const $TupleElement = $.makeType(_.spec, "140d84a2-0e2e-11ed-9101-2128d44365f0", _.syntax.literal);

const TupleElement= _.syntax.$PathNode($.$toSet($TupleElement, $.Cardinality.Many), null, true);



Object.assign(exports, { $AccessKindλEnum: $AccessKindλEnum, AccessKind: AccessKind, $AccessPolicyActionλEnum: $AccessPolicyActionλEnum, AccessPolicyAction: AccessPolicyAction, $CardinalityλEnum: $CardinalityλEnum, Cardinality: Cardinality, $OperatorKindλEnum: $OperatorKindλEnum, OperatorKind: OperatorKind, $ParameterKindλEnum: $ParameterKindλEnum, ParameterKind: ParameterKind, $SourceDeleteActionλEnum: $SourceDeleteActionλEnum, SourceDeleteAction: SourceDeleteAction, $TargetDeleteActionλEnum: $TargetDeleteActionλEnum, TargetDeleteAction: TargetDeleteAction, $TypeModifierλEnum: $TypeModifierλEnum, TypeModifier: TypeModifier, $VolatilityλEnum: $VolatilityλEnum, Volatility: Volatility, $Object_137270700e2e11ed93dedb53acd9287b: $Object_137270700e2e11ed93dedb53acd9287b, Object_137270700e2e11ed93dedb53acd9287b: Object_137270700e2e11ed93dedb53acd9287b, $SubclassableObject: $SubclassableObject, SubclassableObject: SubclassableObject, $InheritingObject: $InheritingObject, InheritingObject: InheritingObject, $AnnotationSubject: $AnnotationSubject, AnnotationSubject: AnnotationSubject, $AccessPolicy: $AccessPolicy, AccessPolicy: AccessPolicy, $Alias: $Alias, Alias: Alias, $Annotation: $Annotation, Annotation: Annotation, $Type: $Type, Type: Type, $PrimitiveType: $PrimitiveType, PrimitiveType: PrimitiveType, $CollectionType: $CollectionType, CollectionType: CollectionType, $Array: $Array, Array: Array, $CallableObject: $CallableObject, CallableObject: CallableObject, $VolatilitySubject: $VolatilitySubject, VolatilitySubject: VolatilitySubject, $Cast: $Cast, Cast: Cast, $ConsistencySubject: $ConsistencySubject, ConsistencySubject: ConsistencySubject, $Constraint: $Constraint, Constraint: Constraint, $Delta: $Delta, Delta: Delta, $Extension: $Extension, Extension: Extension, $Function: $Function, Function: Function, $Global: $Global, Global: Global, $Index: $Index, Index: Index, $Pointer: $Pointer, Pointer: Pointer, $Source: $Source, Source: Source, $Link: $Link, Link: Link, $Migration: $Migration, Migration: Migration, $Module: $Module, Module: Module, $ObjectType: $ObjectType, ObjectType: ObjectType, $Operator: $Operator, Operator: Operator, $Parameter: $Parameter, Parameter: Parameter, $Property: $Property, Property: Property, $PseudoType: $PseudoType, PseudoType: PseudoType, $Range: $Range, Range: Range, $ScalarType: $ScalarType, ScalarType: ScalarType, $Tuple: $Tuple, Tuple: Tuple, $TupleElement: $TupleElement, TupleElement: TupleElement });

const __defaultExports = {
  "AccessKind": AccessKind,
  "AccessPolicyAction": AccessPolicyAction,
  "Cardinality": Cardinality,
  "OperatorKind": OperatorKind,
  "ParameterKind": ParameterKind,
  "SourceDeleteAction": SourceDeleteAction,
  "TargetDeleteAction": TargetDeleteAction,
  "TypeModifier": TypeModifier,
  "Volatility": Volatility,
  "Object": Object_137270700e2e11ed93dedb53acd9287b,
  "SubclassableObject": SubclassableObject,
  "InheritingObject": InheritingObject,
  "AnnotationSubject": AnnotationSubject,
  "AccessPolicy": AccessPolicy,
  "Alias": Alias,
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
  "Global": Global,
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
  "Range": Range,
  "ScalarType": ScalarType,
  "Tuple": Tuple,
  "TupleElement": TupleElement
};
exports.default = __defaultExports;
