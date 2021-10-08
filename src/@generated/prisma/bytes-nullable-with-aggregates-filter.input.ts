import { NestedBytesNullableFilter } from './nested-bytes-nullable-filter.input';
import { NestedBytesNullableWithAggregatesFilter } from './nested-bytes-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';

export class BytesNullableWithAggregatesFilter {

    equals?: Buffer;

    not?: NestedBytesNullableWithAggregatesFilter;

    _count?: NestedIntNullableFilter;

    _min?: NestedBytesNullableFilter;

    _max?: NestedBytesNullableFilter;
}
