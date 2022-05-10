import type { $bool, $number } from "../modules/std";
import { $expr_PolyShapeElement, $scopify, Cardinality, cardinalityUtil, Expression, ExpressionKind, LinkDesc, ObjectType, ObjectTypeExpression, ObjectTypePointers, ObjectTypeSet, PrimitiveTypeSet, PropertyDesc, ScalarType, stripSet, TypeSet, typeutil, BaseType } from "edgedb/dist/reflection";
import type { $expr_PathLeaf, $expr_PathNode, ExpressionRoot, PathParent } from "edgedb/dist/reflection/path";
import type { anonymizeObject } from "./casting";
import type { $expr_Operator } from "edgedb/dist/reflection/funcops";
import { scalarLiterals, literalToScalarType } from "../castMaps";
export declare const ASC: "ASC";
export declare const DESC: "DESC";
export declare const EMPTY_FIRST: "EMPTY FIRST";
export declare const EMPTY_LAST: "EMPTY LAST";
export declare type OrderByDirection = "ASC" | "DESC";
export declare type OrderByEmpty = "EMPTY FIRST" | "EMPTY LAST";
export declare type OrderByExpr = TypeSet<ScalarType | ObjectType, Cardinality>;
export declare type OrderByObjExpr = {
    expression: OrderByExpr;
    direction?: OrderByDirection;
    empty?: OrderByEmpty;
};
export declare type OrderByExpression = OrderByExpr | OrderByObjExpr | [OrderByExpr | OrderByObjExpr, ...(OrderByExpr | OrderByObjExpr)[]];
export declare type OffsetExpression = TypeSet<$number, Cardinality.Empty | Cardinality.One | Cardinality.AtMostOne>;
export declare type SelectFilterExpression = TypeSet<$bool, Cardinality>;
export declare type LimitOffsetExpression = TypeSet<$number, Cardinality.Empty | Cardinality.One | Cardinality.AtMostOne>;
export declare type LimitExpression = TypeSet<$number, Cardinality.Empty | Cardinality.One | Cardinality.AtMostOne>;
export declare type SelectModifierNames = "filter" | "order_by" | "offset" | "limit";
export declare type SelectModifiers = {
    filter?: SelectFilterExpression;
    order_by?: OrderByExpression;
    offset?: OffsetExpression | number;
    limit?: LimitExpression | number;
};
export declare type NormalisedSelectModifiers = {
    filter?: SelectFilterExpression;
    order_by?: OrderByObjExpr[];
    offset?: OffsetExpression;
    limit?: LimitExpression;
};
export declare type $expr_Select<Set extends TypeSet = TypeSet> = Expression<{
    __element__: Set["__element__"];
    __cardinality__: Set["__cardinality__"];
    __expr__: TypeSet;
    __kind__: ExpressionKind.Select;
    __modifiers__: NormalisedSelectModifiers;
    __scope__?: ObjectTypeExpression;
}>;
export interface SelectModifierMethods<Root extends TypeSet> {
    filter<Filter extends SelectFilterExpression>(filter: Filter | ((scope: Root extends ObjectTypeSet ? $scopify<Root["__element__"]> : stripSet<Root>) => Filter)): this;
    order_by(order_by: OrderByExpression | ((scope: Root extends ObjectTypeSet ? $scopify<Root["__element__"]> : stripSet<Root>) => OrderByExpression)): this;
    offset(offset: OffsetExpression | number | ((scope: Root extends ObjectTypeSet ? $scopify<Root["__element__"]> : stripSet<Root>) => OffsetExpression | number)): this;
    limit(limit: LimitExpression | number | ((scope: Root extends ObjectTypeSet ? $scopify<Root["__element__"]> : stripSet<Root>) => LimitExpression | number)): this;
}
declare type argCardToResultCard<OpCard extends Cardinality, BaseCase extends Cardinality> = [OpCard] extends [Cardinality.AtMostOne | Cardinality.One] ? Cardinality.AtMostOne : [OpCard] extends [Cardinality.Empty] ? Cardinality.Empty : BaseCase;
export declare type InferFilterCardinality<Base extends TypeSet, Filter extends TypeSet | undefined> = Filter extends TypeSet ? Base extends ObjectTypeSet ? Filter extends $expr_Operator<"=", any, infer Args, any> ? Args[0] extends $expr_PathLeaf ? Args[0]["__exclusive__"] extends true ? typeutil.assertEqual<Args[0]["__parent__"]["type"]["__element__"]["__name__"], Base["__element__"]["__name__"]> extends true ? argCardToResultCard<Args[1]["__cardinality__"], Base["__cardinality__"]> : Base["__cardinality__"] : Base["__cardinality__"] : Args[0] extends $expr_PathNode ? Args[0]["__exclusive__"] extends true ? Args[0]["__parent__"] extends null ? typeutil.assertEqual<Args[0]["__element__"]["__name__"], Base["__element__"]["__name__"]> extends true ? argCardToResultCard<Args[1]["__cardinality__"], Base["__cardinality__"]> : Base["__cardinality__"] : Args[0]["__parent__"] extends infer Parent ? Parent extends PathParent ? typeutil.assertEqual<Parent["type"]["__element__"]["__name__"], Base["__element__"]["__name__"]> extends true ? argCardToResultCard<Args[1]["__cardinality__"], Base["__cardinality__"]> : Base["__cardinality__"] : Base["__cardinality__"] : Base["__cardinality__"] : Base["__cardinality__"] : Base["__cardinality__"] : Base["__cardinality__"] : Base["__cardinality__"] : Base["__cardinality__"];
export declare type InferOffsetLimitCardinality<Card extends Cardinality, Modifers extends SelectModifiers> = Modifers["limit"] extends number | LimitExpression ? cardinalityUtil.overrideLowerBound<Card, "Zero"> : Modifers["offset"] extends number | OffsetExpression ? cardinalityUtil.overrideLowerBound<Card, "Zero"> : Card;
export declare type ComputeSelectCardinality<Expr extends ObjectTypeExpression, Modifiers extends SelectModifiers> = InferOffsetLimitCardinality<InferFilterCardinality<Expr, Modifiers["filter"]>, Modifiers>;
export declare function is<Expr extends ObjectTypeExpression, Shape extends pointersToSelectShape<Expr["__element__"]["__pointers__"]>>(expr: Expr, shape: Shape): {
    [k in Exclude<keyof Shape, SelectModifierNames>]: $expr_PolyShapeElement<Expr, normaliseElement<Shape[k]>>;
};
export declare function $handleModifiers(modifiers: SelectModifiers, rootExpr: TypeSet): {
    modifiers: NormalisedSelectModifiers;
    cardinality: Cardinality;
};
export declare type $expr_Delete<Root extends ObjectTypeSet = ObjectTypeSet> = Expression<{
    __kind__: ExpressionKind.Delete;
    __element__: Root["__element__"];
    __cardinality__: Root["__cardinality__"];
    __expr__: Root;
}>;
declare function deleteExpr<Expr extends ObjectTypeExpression, Modifiers extends SelectModifiers>(expr: Expr, modifiers?: (scope: $scopify<Expr["__element__"]>) => Readonly<Modifiers>): $expr_Delete<{
    __element__: ObjectType<Expr["__element__"]["__name__"], Expr["__element__"]["__pointers__"], {
        id: true;
    }>;
    __cardinality__: ComputeSelectCardinality<Expr, Modifiers>;
}>;
export { deleteExpr as delete };
export declare function $selectify<Expr extends ExpressionRoot>(expr: Expr): Expr;
export declare type linkDescToLinkProps<Desc extends LinkDesc> = {
    [k in keyof Desc["properties"] & string]: $expr_PathLeaf<TypeSet<Desc["properties"][k]["target"], Desc["properties"][k]["cardinality"]>, {
        type: $scopify<Desc["target"]>;
        linkName: k;
    }, Desc["properties"][k]["exclusive"]>;
};
export declare type pointersToSelectShape<Shape extends ObjectTypePointers = ObjectTypePointers> = Partial<{
    [k in keyof Shape]: Shape[k] extends PropertyDesc ? boolean | TypeSet<Shape[k]["target"], cardinalityUtil.assignable<Shape[k]["cardinality"]>> : Shape[k] extends LinkDesc ? boolean | TypeSet<anonymizeObject<Shape[k]["target"]>, cardinalityUtil.assignable<Shape[k]["cardinality"]>> | (pointersToSelectShape<Shape[k]["target"]["__pointers__"]> & pointersToSelectShape<Shape[k]["properties"]> & SelectModifiers) | ((scope: $scopify<Shape[k]["target"]> & linkDescToLinkProps<Shape[k]>) => pointersToSelectShape<Shape[k]["target"]["__pointers__"]> & pointersToSelectShape<Shape[k]["properties"]> & SelectModifiers) : any;
}> & {
    [k: string]: unknown;
};
export declare type normaliseElement<El> = El extends boolean ? El : El extends TypeSet ? stripSet<El> : El extends (...scope: any[]) => any ? normaliseShape<ReturnType<El>> : El extends object ? normaliseShape<stripSet<El>> : stripSet<El>;
export declare type normaliseShape<Shape extends object> = {
    [k in Exclude<keyof Shape, SelectModifierNames>]: normaliseElement<Shape[k]>;
};
export declare const $existingScopes: Set<Expression<TypeSet<BaseType, Cardinality>, true>>;
export declare function select<Expr extends ObjectTypeExpression>(expr: Expr): $expr_Select<{
    __element__: ObjectType<`${Expr["__element__"]["__name__"]}`, Expr["__element__"]["__pointers__"], Expr["__element__"]["__shape__"]>;
    __cardinality__: Expr["__cardinality__"];
}>;
export declare function select<Expr extends TypeSet>(expr: Expr): $expr_Select<stripSet<Expr>>;
export declare function select<Expr extends ObjectTypeExpression, Shape extends pointersToSelectShape<Expr["__element__"]["__pointers__"]> & SelectModifiers, Modifiers = Pick<Shape, SelectModifierNames>>(expr: Expr, shape: (scope: $scopify<Expr["__element__"]>) => Readonly<Shape>): $expr_Select<{
    __element__: ObjectType<`${Expr["__element__"]["__name__"]}`, Expr["__element__"]["__pointers__"], Omit<normaliseShape<Shape>, SelectModifierNames>>;
    __cardinality__: ComputeSelectCardinality<Expr, Modifiers>;
}>;
export declare function select<Expr extends PrimitiveTypeSet, Modifiers extends SelectModifiers>(expr: Expr, modifiers: (expr: Expr) => Readonly<Modifiers>): $expr_Select<{
    __element__: Expr["__element__"];
    __cardinality__: InferOffsetLimitCardinality<Expr["__cardinality__"], Modifiers>;
}>;
export declare function select<Shape extends {
    [key: string]: TypeSet;
}>(shape: Shape): $expr_Select<{
    __element__: ObjectType<`std::FreeObject`, {}, Shape>;
    __cardinality__: Cardinality.One;
}>;
export declare function select<Expr extends scalarLiterals>(expr: Expr): $expr_Select<{
    __element__: literalToScalarType<Expr>;
    __cardinality__: Cardinality.One;
}>;
