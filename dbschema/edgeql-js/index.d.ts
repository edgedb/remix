export * from "./syntax/external";
export * from "./types";
export { createClient } from "edgedb";
export { Cardinality } from "edgedb/dist/reflection/index";
import { $, _edgedbJsVersion } from "edgedb";
import * as $syntax from "./syntax/syntax";
import * as $op from "./operators";
import _std from "./modules/std";
import _cal from "./modules/cal";
import _cfg from "./modules/cfg";
import _schema from "./modules/schema";
import _sys from "./modules/sys";
import _default from "./modules/default";
import _math from "./modules/math";

declare const ExportDefault: typeof _std & 
  typeof _default & 
  $.util.OmitDollarPrefixed<typeof $syntax> & 
  typeof $op & {
  "std": typeof _std;
  "cal": typeof _cal;
  "cfg": typeof _cfg;
  "schema": typeof _schema;
  "sys": typeof _sys;
  "default": typeof _default;
  "math": typeof _math;
}
export declare type Set<
  Type extends $.BaseType,
  Cardinality extends $.Cardinality = $.Cardinality.Many
> = $.TypeSet<Type, Cardinality>;


export default ExportDefault;
