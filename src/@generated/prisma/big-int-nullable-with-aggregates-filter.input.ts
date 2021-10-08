import { NestedBigIntNullableWithAggregatesFilter } from './nested-big-int-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedFloatNullableFilter } from './nested-float-nullable-filter.input';
import { NestedBigIntNullableFilter } from './nested-big-int-nullable-filter.input';

export class BigIntNullableWithAggregatesFilter {

    equals?: bigint | number;

    in?: Array<bigint> | Array<number>;

    notIn?: Array<bigint> | Array<number>;

    lt?: bigint | number;

    lte?: bigint | number;

    gt?: bigint | number;

    gte?: bigint | number;

    not?: NestedBigIntNullableWithAggregatesFilter;

    _count?: NestedIntNullableFilter;

    _avg?: NestedFloatNullableFilter;

    _sum?: NestedBigIntNullableFilter;

    _min?: NestedBigIntNullableFilter;

    _max?: NestedBigIntNullableFilter;
}
