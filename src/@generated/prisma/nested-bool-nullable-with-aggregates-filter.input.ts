import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedBoolNullableFilter } from './nested-bool-nullable-filter.input';

export class NestedBoolNullableWithAggregatesFilter {
    equals?: boolean;

    not?: NestedBoolNullableWithAggregatesFilter;

    _count?: NestedIntNullableFilter;

    count?: NestedIntNullableFilter;

    _min?: NestedBoolNullableFilter;

    min?: NestedBoolNullableFilter;

    _max?: NestedBoolNullableFilter;

    max?: NestedBoolNullableFilter;
}
