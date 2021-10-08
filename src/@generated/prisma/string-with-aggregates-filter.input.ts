import { NestedIntFilter } from './nested-int-filter.input';
import { NestedStringFilter } from './nested-string-filter.input';
import { NestedStringWithAggregatesFilter } from './nested-string-with-aggregates-filter.input';
import { QueryMode } from './query-mode.enum';

export class StringWithAggregatesFilter {

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

    not?: NestedStringWithAggregatesFilter;

    _count?: NestedIntFilter;

    _min?: NestedStringFilter;

    _max?: NestedStringFilter;
}
