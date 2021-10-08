import { NestedDateTimeFilter } from './nested-date-time-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';

export class NestedDateTimeWithAggregatesFilter {

    equals?: Date | string;

    in?: Array<Date> | Array<string>;

    notIn?: Array<Date> | Array<string>;

    lt?: Date | string;

    lte?: Date | string;

    gt?: Date | string;

    gte?: Date | string;

    not?: NestedDateTimeWithAggregatesFilter;

    _count?: NestedIntFilter;

    _min?: NestedDateTimeFilter;

    _max?: NestedDateTimeFilter;
}
