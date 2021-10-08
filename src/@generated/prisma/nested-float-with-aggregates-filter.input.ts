import { NestedFloatFilter } from './nested-float-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';

export class NestedFloatWithAggregatesFilter {
    equals?: number;

    in?: Array<number>;

    notIn?: Array<number>;

    lt?: number;

    lte?: number;

    gt?: number;

    gte?: number;

    not?: NestedFloatWithAggregatesFilter;

    _count?: NestedIntFilter;

    _avg?: NestedFloatFilter;

    _sum?: NestedFloatFilter;

    _min?: NestedFloatFilter;

    _max?: NestedFloatFilter;
}
