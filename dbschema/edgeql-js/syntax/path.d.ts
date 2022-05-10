import { ObjectTypeSet, TypeSet, Expression } from "edgedb/dist/reflection";
import type { PathParent, $expr_PathLeaf, $expr_PathNode, $pathify, ExpressionRoot } from "edgedb/dist/reflection/path";
declare function PathLeaf<Root extends TypeSet, Parent extends PathParent, Exclusive extends boolean = boolean>(root: Root, parent: Parent, exclusive: Exclusive, scopeRoot?: TypeSet | null): $expr_PathLeaf<Root, Parent, Exclusive>;
declare function PathNode<Root extends ObjectTypeSet, Parent extends PathParent | null, Exclusive extends boolean = boolean>(root: Root, parent: Parent, exclusive: Exclusive, scopeRoot?: TypeSet | null): $expr_PathNode<Root, Parent, Exclusive>;
declare function _$pathify<Root extends TypeSet, Parent extends PathParent>(_root: Root): $pathify<Root, Parent>;
export declare function $jsonDestructure(_expr: ExpressionRoot): any;
export declare function $expressionify<T extends ExpressionRoot>(_expr: T): Expression<T>;
export declare function $getScopedExpr<T extends ExpressionRoot>(expr: T, existingScopes?: Set<Expression>): Expression<T>;
export { _$pathify as $pathify, PathLeaf as $PathLeaf, PathNode as $PathNode };
