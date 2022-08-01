import { $ } from "edgedb";
import * as _ from "../imports";
import type * as _std from "./std";
export type $NoteλShape = $.typeutil.flatten<_std.$Object_1314de600e2e11ed9ceb0977e08fb96bλShape & {
  "body": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "createdAt": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, true>;
  "title": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "user": $.LinkDesc<$User, $.Cardinality.One, {}, false, false,  false, false>;
  "<notes[is User]": $.LinkDesc<$User, $.Cardinality.Many, {}, false, false,  false, false>;
  "<notes": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Note = $.ObjectType<"default::Note", $NoteλShape, null>;
const $Note = $.makeType<$Note>(_.spec, "6f6b101a-11d2-11ed-beef-c9b7f5cb7741", _.syntax.literal);

const Note: $.$expr_PathNode<$.TypeSet<$Note, $.Cardinality.Many>, null, true> = _.syntax.$PathNode($.$toSet($Note, $.Cardinality.Many), null, true);

export type $PasswordλShape = $.typeutil.flatten<_std.$Object_1314de600e2e11ed9ceb0977e08fb96bλShape & {
  "user": $.LinkDesc<$User, $.Cardinality.One, {}, true, false,  false, false>;
  "hash": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "<password[is User]": $.LinkDesc<$User, $.Cardinality.Many, {}, false, false,  false, false>;
  "<password": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Password = $.ObjectType<"default::Password", $PasswordλShape, null>;
const $Password = $.makeType<$Password>(_.spec, "6f72006e-11d2-11ed-930e-777ffb2fb597", _.syntax.literal);

const Password: $.$expr_PathNode<$.TypeSet<$Password, $.Cardinality.Many>, null, true> = _.syntax.$PathNode($.$toSet($Password, $.Cardinality.Many), null, true);

export type $UserλShape = $.typeutil.flatten<_std.$Object_1314de600e2e11ed9ceb0977e08fb96bλShape & {
  "createdAt": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, true>;
  "email": $.PropertyDesc<_std.$str, $.Cardinality.One, true, false, false, false>;
  "notes": $.LinkDesc<$Note, $.Cardinality.Many, {}, false, true,  false, false>;
  "password": $.LinkDesc<$Password, $.Cardinality.AtMostOne, {}, false, true,  false, false>;
  "<user[is Note]": $.LinkDesc<$Note, $.Cardinality.Many, {}, false, false,  false, false>;
  "<user[is Password]": $.LinkDesc<$Password, $.Cardinality.AtMostOne, {}, true, false,  false, false>;
  "<user": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $User = $.ObjectType<"default::User", $UserλShape, null>;
const $User = $.makeType<$User>(_.spec, "6f6dcfbc-11d2-11ed-a6c4-1fdf6fbd7715", _.syntax.literal);

const User: $.$expr_PathNode<$.TypeSet<$User, $.Cardinality.Many>, null, true> = _.syntax.$PathNode($.$toSet($User, $.Cardinality.Many), null, true);



export { $Note, Note, $Password, Password, $User, User };

type __defaultExports = {
  "Note": typeof Note;
  "Password": typeof Password;
  "User": typeof User
};
const __defaultExports: __defaultExports = {
  "Note": Note,
  "Password": Password,
  "User": User
};
export default __defaultExports;
