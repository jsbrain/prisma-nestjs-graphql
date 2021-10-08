import { NestedBytesNullableFilter } from './nested-bytes-nullable-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';

export class NestedBytesNullableWithAggregatesFilter {
    equals?: Buffer;

    not?: NestedBytesNullableWithAggregatesFilter;

    _count?: NestedIntNullableFilter;

    _min?: NestedBytesNullableFilter;

    _max?: NestedBytesNullableFilter;
}
