import { NestedBytesNullableFilter } from './nested-bytes-nullable-filter.input';

export class BytesNullableFilter {

    equals?: Buffer;

    not?: NestedBytesNullableFilter;
}
