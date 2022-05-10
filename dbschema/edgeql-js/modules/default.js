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
const $Note = $.makeType(_.spec, "98335d4e-ccf5-11ec-8613-4bea1201a252", _.syntax.literal);

const Note= _.syntax.$PathNode($.$toSet($Note, $.Cardinality.Many), null, true);

const $Password = $.makeType(_.spec, "98376e20-ccf5-11ec-b2ba-2d1dbf66c4a3", _.syntax.literal);

const Password= _.syntax.$PathNode($.$toSet($Password, $.Cardinality.Many), null, true);

const $User = $.makeType(_.spec, "9835004a-ccf5-11ec-bae9-694ab667b6ba", _.syntax.literal);

const User= _.syntax.$PathNode($.$toSet($User, $.Cardinality.Many), null, true);



Object.assign(exports, { $Note: $Note, Note: Note, $Password: $Password, Password: Password, $User: $User, User: User });

const __defaultExports = {
  "Note": Note,
  "Password": Password,
  "User": User
};
exports.default = __defaultExports;
