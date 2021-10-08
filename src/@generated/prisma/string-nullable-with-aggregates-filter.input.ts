import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedStringNullableFilter } from './nested-string-nullable-filter.input';
import { NestedStringNullableWithAggregatesFilter } from './nested-string-nullable-with-aggregates-filter.input';
import { QueryMode } from './query-mode.enum';

export class StringNullableWithAggregatesFilter {

    equals?: string;

    in?: Array<string>;

    notIn?: Array<string>;

    lt?: string;

    lte?: string;

    gt?: string;

    gte?: string;

    contains?: string;

    startsWith?: string;

    endsWith?: string;

    mode?: QueryMode;

    not?: NestedStringNullableWithAggregatesFilter;

    _count?: NestedIntNullableFilter;

    _min?: NestedStringNullableFilter;

    _max?: NestedStringNullableFilter;
}
