import { Expression, ExpressionKind, ObjectTypePointers, TypeSet, ObjectTypeSet, stripBacklinks, stripNonUpdateables, typeutil, ObjectTypeExpression, $scopify, Cardinality } from "edgedb/dist/reflection";
import type { pointerToAssignmentExpression } from "./casting";
import { SelectModifiers, NormalisedSelectModifiers, ComputeSelectCardinality } from "./select";
import { pointerIsOptional } from "./insert";
export declare type $expr_Update<Set extends TypeSet = TypeSet, Expr extends ObjectTypeSet = ObjectTypeSet, Shape extends UpdateShape<Expr> = any> = Expression<{
    __kind__: ExpressionKind.Update;
    __element__: Set["__element__"];
    __cardinality__: Set["__cardinality__"];
    __expr__: Expr;
    __shape__: Shape;
    __modifiers__: NormalisedSelectModifiers;
    __scope__: ObjectTypeExpression;
}>;
export declare type UpdateShape<Root extends ObjectTypeSet> = typeutil.stripNever<stripNonUpdateables<stripBacklinks<Root["__element__"]["__pointers__"]>>> extends infer Shape ? Shape extends ObjectTypePointers ? {
    [k in keyof Shape]?: (pointerToAssignmentExpression<Shape[k]> | (Shape[k]["cardinality"] extends Cardinality.Many | Cardinality.AtLeastOne ? {
        "+=": pointerToAssignmentExpression<Shape[k], true>;
    } | {
        "-=": pointerToAssignmentExpression<Shape[k], true>;
    } : never)) | (pointerIsOptional<Shape[k]> extends true ? undefined | null : never);
} : never : never;
export declare function update<Expr extends ObjectTypeExpression, Shape extends {
    filter?: SelectModifiers["filter"];
    order_by?: SelectModifiers["order_by"];
    limit?: SelectModifiers["limit"];
    offset?: SelectModifiers["offset"];
    set: UpdateShape<Expr>;
}>(expr: Expr, shape: (scope: $scopify<Expr["__element__"]>) => Readonly<Shape>): $expr_Update<{
    __element__: Expr["__element__"];
    __cardinality__: ComputeSelectCardinality<Expr, Shape>;
}, Expr, Shape["set"]>;
