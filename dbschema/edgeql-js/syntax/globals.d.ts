import { Expression, ExpressionKind, BaseType, Cardinality } from "edgedb/dist/reflection/index";
export declare function makeGlobal<Name extends string, Type extends BaseType, Card extends Cardinality>(name: Name, type: Type, card: Card): $expr_Global<Name, Type, Card>;
export declare type $expr_Global<Name extends string = string, Type extends BaseType = BaseType, Card extends Cardinality = Cardinality> = Expression<{
    __name__: Name;
    __element__: Type;
    __cardinality__: Card;
    __kind__: ExpressionKind.Global;
}>;
