import { NestedFloatWithAggregatesFilter } from './nested-float-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedFloatFilter } from './nested-float-filter.input';

export class FloatWithAggregatesFilter {
    equals?: number;

    in?: Array<number>;

    notIn?: Array<number>;

    lt?: number;

    lte?: number;

    gt?: number;

    gte?: number;

    not?: NestedFloatWithAggregatesFilter;

    _count?: NestedIntFilter;

    count?: NestedIntFilter;

    _avg?: NestedFloatFilter;

    avg?: NestedFloatFilter;

    _sum?: NestedFloatFilter;

    sum?: NestedFloatFilter;

    _min?: NestedFloatFilter;

    min?: NestedFloatFilter;

    _max?: NestedFloatFilter;

    max?: NestedFloatFilter;
}
