import type { LocalDate, LocalDateTime, Duration } from "edgedb";
import { Range } from "edgedb";
import { RangeType, $expr_Literal, getPrimitiveBaseType, TypeSet, $expr_Function, cardinalityUtil, BaseType } from "edgedb/dist/reflection/index";
import type { $number, $decimal, $datetime, $duration, $bool } from "../modules/std";
import type { $local_date, $local_datetime } from "../modules/cal";
import type { literalToScalarType, mapLiteralToTypeSet, orScalarLiteral } from "../castMaps";
declare type $anypoint = $number | $local_date | $decimal | $datetime | $local_datetime | $duration;
declare function range<Element extends $anypoint>(element: Element): RangeType<Element>;
declare function range<T extends number | Date | LocalDate | LocalDateTime | Duration>(val: Range<T>): $expr_Literal<RangeType<getPrimitiveBaseType<literalToScalarType<T>>>>;
declare function range<NamedArgs extends {
    inc_lower?: orScalarLiteral<TypeSet<$bool>>;
    inc_upper?: orScalarLiteral<TypeSet<$bool>>;
    empty?: orScalarLiteral<TypeSet<$bool>>;
}, P1 extends orScalarLiteral<TypeSet<$anypoint>> | undefined, P2 extends orScalarLiteral<TypeSet<BaseType extends literalToScalarType<P1> ? $anypoint : getPrimitiveBaseType<literalToScalarType<P1>>>> | undefined>(namedArgs: NamedArgs, lower?: P1, upper?: P2): $expr_Function<"std::range", mapLiteralToTypeSet<[P1, P2]>, mapLiteralToTypeSet<NamedArgs>, TypeSet<RangeType<literalToScalarType<P1> extends $anypoint ? literalToScalarType<P1> : literalToScalarType<P2> extends $anypoint ? literalToScalarType<P2> : $anypoint>, cardinalityUtil.multiplyCardinalities<cardinalityUtil.multiplyCardinalities<cardinalityUtil.multiplyCardinalities<cardinalityUtil.multiplyCardinalities<cardinalityUtil.optionalParamCardinality<P1>, cardinalityUtil.optionalParamCardinality<P2>>, cardinalityUtil.optionalParamCardinality<NamedArgs["inc_lower"]>>, cardinalityUtil.optionalParamCardinality<NamedArgs["inc_upper"]>>, cardinalityUtil.optionalParamCardinality<NamedArgs["empty"]>>>>;
declare function range<P1 extends orScalarLiteral<TypeSet<$anypoint>> | undefined, P2 extends orScalarLiteral<TypeSet<BaseType extends literalToScalarType<P1> ? $anypoint : getPrimitiveBaseType<literalToScalarType<P1>>>> | undefined>(lower?: P1, upper?: P2): $expr_Function<"std::range", mapLiteralToTypeSet<[P1, P2]>, {}, TypeSet<RangeType<literalToScalarType<P1> extends $anypoint ? literalToScalarType<P1> : literalToScalarType<P2> extends $anypoint ? literalToScalarType<P2> : $anypoint>, cardinalityUtil.multiplyCardinalities<cardinalityUtil.optionalParamCardinality<P1>, cardinalityUtil.optionalParamCardinality<P2>>>>;
export { range as $range };
