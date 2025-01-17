import { NestedFloatFilter } from './nested-float-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedIntWithAggregatesFilter } from './nested-int-with-aggregates-filter.input';

export class IntWithAggregatesFilter {

    equals?: number;

    in?: Array<number>;

    notIn?: Array<number>;

    lt?: number;

    lte?: number;

    gt?: number;

    gte?: number;

    not?: NestedIntWithAggregatesFilter;

    _count?: NestedIntFilter;

    _avg?: NestedFloatFilter;

    _sum?: NestedIntFilter;

    _min?: NestedIntFilter;

    _max?: NestedIntFilter;
}
