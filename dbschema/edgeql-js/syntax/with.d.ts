import { Expression, ExpressionKind, TypeSet } from "edgedb/dist/reflection";
import type { $expr_Select } from "./select";
import type { $expr_For } from "./for";
import type { $expr_Insert } from "./insert";
import type { $expr_Update } from "./update";
export declare type $expr_Alias<Expr extends TypeSet = TypeSet> = Expression<{
    __element__: Expr["__element__"];
    __cardinality__: Expr["__cardinality__"];
    __kind__: ExpressionKind.Alias;
    __expr__: Expr;
}>;
export declare function alias<Expr extends Expression>(expr: Expr): $expr_Alias<Expr>;
export declare type WithableExpression = $expr_Select | $expr_For | $expr_Insert | $expr_Update;
export declare type $expr_With<Refs extends TypeSet[] = TypeSet[], Expr extends WithableExpression = WithableExpression> = Expression<{
    __element__: Expr["__element__"];
    __cardinality__: Expr["__cardinality__"];
    __kind__: ExpressionKind.With;
    __expr__: Expr;
    __refs__: Refs;
}>;
declare function _with<Refs extends Expression[], Expr extends WithableExpression>(refs: Refs, expr: Expr): $expr_With<Refs, Expr>;
export { _with as with };
