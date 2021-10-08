import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedFloatNullableFilter } from './nested-float-nullable-filter.input';

export class NestedFloatNullableWithAggregatesFilter {

    equals?: number;

    in?: Array<number>;

    notIn?: Array<number>;

    lt?: number;

    lte?: number;

    gt?: number;

    gte?: number;

    not?: NestedFloatNullableWithAggregatesFilter;

    _count?: NestedIntNullableFilter;

    _avg?: NestedFloatNullableFilter;

    _sum?: NestedFloatNullableFilter;

    _min?: NestedFloatNullableFilter;

    _max?: NestedFloatNullableFilter;
}
