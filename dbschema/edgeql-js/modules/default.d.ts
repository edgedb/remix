import { $ } from "edgedb";
import * as _ from "../imports";
import type * as _std from "./std";
export declare type $NoteλShape = $.typeutil.flatten<_std.$Object_f1e1d4a0bda611eca08599c7be50f4a1λShape & {
  "body": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "createdAt": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, true>;
  "title": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "user": $.LinkDesc<$User, $.Cardinality.One, {}, false, false,  false, false>;
  "<notes[is User]": $.LinkDesc<$User, $.Cardinality.Many, {}, false, false,  false, false>;
  "<notes": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
declare type $Note = $.ObjectType<"default::Note", $NoteλShape, null>;
declare const $Note: $Note

declare const Note: $.$expr_PathNode<$.TypeSet<$Note, $.Cardinality.Many>, null, true> 

export declare type $PasswordλShape = $.typeutil.flatten<_std.$Object_f1e1d4a0bda611eca08599c7be50f4a1λShape & {
  "user": $.LinkDesc<$User, $.Cardinality.One, {}, true, false,  false, false>;
  "hash": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "<password[is User]": $.LinkDesc<$User, $.Cardinality.Many, {}, false, false,  false, false>;
  "<password": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
declare type $Password = $.ObjectType<"default::Password", $PasswordλShape, null>;
declare const $Password: $Password

declare const Password: $.$expr_PathNode<$.TypeSet<$Password, $.Cardinality.Many>, null, true> 

export declare type $UserλShape = $.typeutil.flatten<_std.$Object_f1e1d4a0bda611eca08599c7be50f4a1λShape & {
  "createdAt": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, true>;
  "email": $.PropertyDesc<_std.$str, $.Cardinality.One, true, false, false, false>;
  "notes": $.LinkDesc<$Note, $.Cardinality.Many, {}, false, true,  false, false>;
  "password": $.LinkDesc<$Password, $.Cardinality.AtMostOne, {}, false, true,  false, false>;
  "<user[is Note]": $.LinkDesc<$Note, $.Cardinality.Many, {}, false, false,  false, false>;
  "<user[is Password]": $.LinkDesc<$Password, $.Cardinality.AtMostOne, {}, true, false,  false, false>;
  "<user": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
declare type $User = $.ObjectType<"default::User", $UserλShape, null>;
declare const $User: $User

declare const User: $.$expr_PathNode<$.TypeSet<$User, $.Cardinality.Many>, null, true> 



export { $Note, Note, $Password, Password, $User, User };

declare type __defaultExports = {
  "Note": typeof Note;
  "Password": typeof Password;
  "User": typeof User
};
declare const __defaultExports: __defaultExports;
export default __defaultExports;
