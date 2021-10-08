import { NestedBoolNullableFilter } from './nested-bool-nullable-filter.input';
import { NestedBoolNullableWithAggregatesFilter } from './nested-bool-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';

export class BoolNullableWithAggregatesFilter {
    equals?: boolean;

    not?: NestedBoolNullableWithAggregatesFilter;

    _count?: NestedIntNullableFilter;

    _min?: NestedBoolNullableFilter;

    _max?: NestedBoolNullableFilter;
}
