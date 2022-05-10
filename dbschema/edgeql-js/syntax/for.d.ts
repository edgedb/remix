import { Expression, BaseType, BaseTypeSet, Cardinality, ExpressionKind, cardinalityUtil } from "edgedb/dist/reflection";
export declare type $expr_For<IterSet extends BaseTypeSet = BaseTypeSet, Expr extends Expression = Expression> = Expression<{
    __element__: Expr["__element__"];
    __cardinality__: cardinalityUtil.multiplyCardinalities<IterSet["__cardinality__"], Expr["__cardinality__"]>;
    __kind__: ExpressionKind.For;
    __iterSet__: IterSet;
    __forVar__: $expr_ForVar;
    __expr__: Expr;
}>;
export declare type $expr_ForVar<Type extends BaseType = BaseType> = Expression<{
    __element__: Type;
    __cardinality__: Cardinality.One;
    __kind__: ExpressionKind.ForVar;
}>;
declare function _for<IteratorSet extends BaseTypeSet, Expr extends Expression>(set: IteratorSet, expr: (variable: $expr_ForVar<IteratorSet["__element__"]>) => Expr): $expr_For<IteratorSet, Expr>;
export { _for as for };
