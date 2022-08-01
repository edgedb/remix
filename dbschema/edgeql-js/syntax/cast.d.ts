import { Expression, ExpressionKind, BaseType, TypeSet, Cardinality } from "edgedb/dist/reflection/index";
import type { orScalarLiteral } from "../castMaps";
export declare function cast<Target extends BaseType>(target: Target, arg: null): $expr_Cast<Target, TypeSet<Target, Cardinality.Empty>>;
export declare function cast<Target extends BaseType, Expr extends TypeSet>(target: Target, expr: orScalarLiteral<Expr>): $expr_Cast<Target, Expr>;
export declare type $expr_Cast<Target extends BaseType = BaseType, Expr extends TypeSet = TypeSet> = Expression<{
    __element__: Target;
    __cardinality__: Expr["__cardinality__"];
    __kind__: ExpressionKind.Cast;
    __expr__: Expr | null;
}>;
