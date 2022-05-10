import { Expression, ExpressionKind, BaseType, CastableNonArrayType, CastableArrayType, unwrapCastableType, TypeSet, Cardinality } from "edgedb/dist/reflection";
export declare function cast<Target extends CastableNonArrayType | CastableArrayType>(target: Target, arg: null): $expr_Cast<Target, TypeSet<Target, Cardinality.Empty>>;
export declare function cast<Target extends CastableNonArrayType | CastableArrayType, Expr extends TypeSet>(target: Target, expr: Expr): $expr_Cast<Target, Expr>;
export declare function cast<Target extends CastableNonArrayType | CastableArrayType, Expr extends TypeSet>(target: Target, expr: Expr): $expr_Cast<Target, Expr>;
export declare type $expr_Cast<Target extends BaseType = BaseType, Expr extends TypeSet = TypeSet> = Expression<{
    __element__: unwrapCastableType<Target>;
    __cardinality__: Expr["__cardinality__"];
    __kind__: ExpressionKind.Cast;
    __expr__: Expr | null;
}>;
