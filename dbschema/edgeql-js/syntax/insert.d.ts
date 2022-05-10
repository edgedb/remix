import { Cardinality, Expression, ExpressionKind, LinkDesc, ObjectTypeSet, ObjectTypePointers, PropertyDesc, stripBacklinks, stripNonInsertables, typeutil, $scopify, stripSet, TypeSet } from "edgedb/dist/reflection";
import type { pointerToAssignmentExpression } from "./casting";
import type { $expr_PathNode } from "edgedb/dist/reflection/path";
import type { $Object } from "../modules/std";
export declare type pointerIsOptional<T extends PropertyDesc | LinkDesc> = T["cardinality"] extends Cardinality.Many | Cardinality.Empty | Cardinality.AtMostOne ? true : false;
export declare type InsertShape<Root extends ObjectTypeSet> = typeutil.flatten<RawInsertShape<Root>>;
export declare type RawInsertShape<Root extends ObjectTypeSet> = $expr_PathNode extends Root ? never : typeutil.stripNever<stripNonInsertables<stripBacklinks<Root["__element__"]["__pointers__"]>>> extends infer Shape ? Shape extends ObjectTypePointers ? typeutil.addQuestionMarks<{
    [k in keyof Shape]: pointerToAssignmentExpression<Shape[k]> | (pointerIsOptional<Shape[k]> extends true ? undefined | null : never) | (Shape[k]["hasDefault"] extends true ? undefined : never);
}> : never : never;
interface UnlessConflict {
    on: TypeSet | null;
    else?: TypeSet;
}
declare type InsertBaseExpression<Root extends TypeSet = TypeSet> = {
    __kind__: ExpressionKind.Insert;
    __element__: Root["__element__"];
    __cardinality__: Cardinality.One;
    __expr__: stripSet<Root>;
    __shape__: any;
};
export declare type $expr_Insert<Root extends $expr_PathNode = $expr_PathNode> = Expression<{
    __kind__: ExpressionKind.Insert;
    __element__: Root["__element__"];
    __cardinality__: Cardinality.One;
    __expr__: Root;
    __shape__: InsertShape<Root>;
    unlessConflict(): $expr_InsertUnlessConflict<Expression<{
        __kind__: ExpressionKind.Insert;
        __element__: Root["__element__"];
        __cardinality__: Cardinality.One;
        __expr__: Root;
        __shape__: InsertShape<Root>;
    }>, {
        on: null;
    }>;
    unlessConflict<Conflict extends UnlessConflict>(conflictGetter: (scope: $scopify<Root["__element__"]>) => Conflict): $expr_InsertUnlessConflict<Expression<{
        __kind__: ExpressionKind.Insert;
        __element__: Root["__element__"];
        __cardinality__: Cardinality.One;
        __expr__: Root;
        __shape__: InsertShape<Root>;
    }>, Conflict>;
}>;
export declare type $expr_InsertUnlessConflict<Root extends InsertBaseExpression = InsertBaseExpression, Conflict extends UnlessConflict = UnlessConflict> = Expression<{
    __kind__: ExpressionKind.InsertUnlessConflict;
    __element__: Conflict["else"] extends TypeSet ? Conflict["else"]["__element__"]["__name__"] extends Root["__element__"]["__name__"] ? Root["__element__"] : $Object : Root["__element__"];
    __cardinality__: Conflict["else"] extends TypeSet ? Conflict["else"]["__cardinality__"] : Cardinality.AtMostOne;
    __expr__: Root;
    __conflict__: Conflict;
}>;
export declare function $insertify(expr: Omit<$expr_Insert, "unlessConflict">): $expr_Insert;
export declare function $normaliseInsertShape(root: ObjectTypeSet, shape: {
    [key: string]: any;
}, isUpdate?: boolean): {
    [key: string]: TypeSet | {
        "+=": TypeSet;
    } | {
        "-=": TypeSet;
    };
};
export declare function insert<Root extends $expr_PathNode>(root: Root, shape: InsertShape<Root>): $expr_Insert<Root>;
export {};
