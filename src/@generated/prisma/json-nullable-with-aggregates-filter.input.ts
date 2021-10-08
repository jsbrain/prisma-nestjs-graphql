import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedJsonNullableFilter } from './nested-json-nullable-filter.input';

export class JsonNullableWithAggregatesFilter {

    equals?: any;

    lt?: any;

    lte?: any;

    gt?: any;

    gte?: any;

    path?: Array<string>;

    string_contains?: string;

    string_starts_with?: string;

    string_ends_with?: string;

    array_contains?: any;

    array_starts_with?: any;

    array_ends_with?: any;

    not?: any;

    _count?: NestedIntNullableFilter;

    _min?: NestedJsonNullableFilter;

    _max?: NestedJsonNullableFilter;
}
