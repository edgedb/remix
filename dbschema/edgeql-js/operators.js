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
const _ = __importStar(require("./imports"));

const overloadDefs = {
  Infix: {
    "=": [
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000002", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000002", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "eaee6a1e-bda6-11ec-80e5-9729b54af6fd", optional: false, setoftype: false, variadic: false}, {typeId: "eaee6a1e-bda6-11ec-80e5-9729b54af6fd", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}, {typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000100", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000100", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "f1dae21c-bda6-11ec-945c-0dc522decfc4", optional: false, setoftype: false, variadic: false}, {typeId: "f1dae21c-bda6-11ec-945c-0dc522decfc4", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000130", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000130", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "eae67af2-bda6-11ec-817b-5343efe7c32c", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    ],
    "?=": [
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000002", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000002", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000109", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000109", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "eaee6a1e-bda6-11ec-80e5-9729b54af6fd", optional: true, setoftype: false, variadic: false}, {typeId: "eaee6a1e-bda6-11ec-80e5-9729b54af6fd", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-0000000001ff", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000110", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: true, setoftype: false, variadic: false}, {typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000102", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000102", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010a", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010f", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000100", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000100", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "f1dae21c-bda6-11ec-945c-0dc522decfc4", optional: true, setoftype: false, variadic: false}, {typeId: "f1dae21c-bda6-11ec-945c-0dc522decfc4", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000130", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000130", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010b", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010c", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010c", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010d", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010d", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000111", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: true, setoftype: false, variadic: false}, {typeId: "eae67af2-bda6-11ec-817b-5343efe7c32c", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    ],
    "!=": [
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000002", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000002", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "eaee6a1e-bda6-11ec-80e5-9729b54af6fd", optional: false, setoftype: false, variadic: false}, {typeId: "eaee6a1e-bda6-11ec-80e5-9729b54af6fd", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}, {typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000100", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000100", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "f1dae21c-bda6-11ec-945c-0dc522decfc4", optional: false, setoftype: false, variadic: false}, {typeId: "f1dae21c-bda6-11ec-945c-0dc522decfc4", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000130", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000130", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "eae67af2-bda6-11ec-817b-5343efe7c32c", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    ],
    "?!=": [
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000002", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000002", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000109", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000109", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "eaee6a1e-bda6-11ec-80e5-9729b54af6fd", optional: true, setoftype: false, variadic: false}, {typeId: "eaee6a1e-bda6-11ec-80e5-9729b54af6fd", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-0000000001ff", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000110", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: true, setoftype: false, variadic: false}, {typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000102", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000102", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010a", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010f", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000100", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000100", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "f1dae21c-bda6-11ec-945c-0dc522decfc4", optional: true, setoftype: false, variadic: false}, {typeId: "f1dae21c-bda6-11ec-945c-0dc522decfc4", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000130", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000130", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010b", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010c", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010c", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010d", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010d", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000111", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: true, setoftype: false, variadic: false}, {typeId: "eae67af2-bda6-11ec-817b-5343efe7c32c", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    ],
    ">=": [
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000002", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000002", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "eaee6a1e-bda6-11ec-80e5-9729b54af6fd", optional: false, setoftype: false, variadic: false}, {typeId: "eaee6a1e-bda6-11ec-80e5-9729b54af6fd", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}, {typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000100", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000100", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "f1dae21c-bda6-11ec-945c-0dc522decfc4", optional: false, setoftype: false, variadic: false}, {typeId: "f1dae21c-bda6-11ec-945c-0dc522decfc4", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000130", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000130", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "eae67af2-bda6-11ec-817b-5343efe7c32c", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    ],
    ">": [
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000002", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000002", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "eaee6a1e-bda6-11ec-80e5-9729b54af6fd", optional: false, setoftype: false, variadic: false}, {typeId: "eaee6a1e-bda6-11ec-80e5-9729b54af6fd", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}, {typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000100", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000100", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "f1dae21c-bda6-11ec-945c-0dc522decfc4", optional: false, setoftype: false, variadic: false}, {typeId: "f1dae21c-bda6-11ec-945c-0dc522decfc4", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000130", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000130", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "eae67af2-bda6-11ec-817b-5343efe7c32c", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    ],
    "<=": [
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000002", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000002", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "eaee6a1e-bda6-11ec-80e5-9729b54af6fd", optional: false, setoftype: false, variadic: false}, {typeId: "eaee6a1e-bda6-11ec-80e5-9729b54af6fd", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}, {typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000100", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000100", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "f1dae21c-bda6-11ec-945c-0dc522decfc4", optional: false, setoftype: false, variadic: false}, {typeId: "f1dae21c-bda6-11ec-945c-0dc522decfc4", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000130", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000130", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "eae67af2-bda6-11ec-817b-5343efe7c32c", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    ],
    "<": [
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000002", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000002", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "eaee6a1e-bda6-11ec-80e5-9729b54af6fd", optional: false, setoftype: false, variadic: false}, {typeId: "eaee6a1e-bda6-11ec-80e5-9729b54af6fd", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}, {typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000100", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000100", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "f1dae21c-bda6-11ec-945c-0dc522decfc4", optional: false, setoftype: false, variadic: false}, {typeId: "f1dae21c-bda6-11ec-945c-0dc522decfc4", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000130", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000130", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "eae67af2-bda6-11ec-817b-5343efe7c32c", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    ],
    "or": [
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    ],
    "and": [
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    ],
    "+": [
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000110"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010a"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010e"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010a"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010b"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010b"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010c"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010c"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010d"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010d"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000111"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000111"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
    ],
    "-": [
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000110"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010a"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010e"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010e"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010a"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010b"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010b"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010c"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010c"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010d"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010d"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000111"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000111"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
    ],
    "*": [
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000110"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
    ],
    "/": [
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
    ],
    "//": [
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000110"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
    ],
    "%": [
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000110"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
    ],
    "^": [
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
    ],
    "in": [
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    ],
    "not in": [
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    ],
    "union": [
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000001", returnTypemod: "SetOfType"},
    ],
    "??": [
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000001", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000001", returnTypemod: "SetOfType"},
    ],
    "++": [
      {kind: "Infix", args: [{typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}, {typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}], returnTypeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000102"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010f"},
    ],
    "like": [
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    ],
    "ilike": [
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    ],
    "not like": [
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    ],
    "not ilike": [
      {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    ],
  },
  Postfix: {
  },
  Prefix: {
    "not": [
      {kind: "Prefix", args: [{typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    ],
    "+": [
      {kind: "Prefix", args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
      {kind: "Prefix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000110"},
      {kind: "Prefix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
    ],
    "-": [
      {kind: "Prefix", args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
      {kind: "Prefix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000110"},
      {kind: "Prefix", args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010e"},
      {kind: "Prefix", args: [{typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000111"},
      {kind: "Prefix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
    ],
    "exists": [
      {kind: "Prefix", args: [{typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    ],
    "distinct": [
      {kind: "Prefix", args: [{typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000001", returnTypemod: "SetOfType"},
    ],
  },
  Ternary: {
    "if_else": [
      {kind: "Ternary", args: [{typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000001", returnTypemod: "SetOfType"},
    ],
  },
};

function op(...args) {
  let op = "";
    let params = [];
    let defs = null;
    if (args.length === 2) {
      if (typeof args[0] === "string" && overloadDefs.Prefix[args[0]]) {
        op = args[0];
        params = [args[1]];
        defs = overloadDefs.Prefix[op];
      } else if (typeof args[1] === "string" && overloadDefs.Postfix[args[1]]) {
        op = args[1];
        params = [args[0]];
        defs = overloadDefs.Postfix[op];
      }
    } else if (args.length === 3) {
      if (typeof args[1] === "string") {
        op = args[1];
        params = [args[0], args[2]];
        defs = overloadDefs.Infix[op];
      }
    } else if (args.length === 5) {
      if (typeof args[1] === "string" && typeof args[3] === "string") {
        op = `${args[1]}_${args[3]}`;
        params = [args[0], args[2], args[4]];
        defs = overloadDefs.Ternary[op];
      }
    }
  
    if (!defs) {
      throw new Error(`No operator exists with signature: ${args.map(arg => `${arg}`).join(", ")}`);
    }

  const {kind, returnType, cardinality, args: resolvedArgs} = _.syntax.$resolveOverload(op, params, _.spec, defs);

  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: op,
    __opkind__: kind,
    __args__: resolvedArgs,
  });
};


Object.assign(exports, { op: op });
