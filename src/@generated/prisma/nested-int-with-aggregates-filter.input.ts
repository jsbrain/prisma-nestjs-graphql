import { NestedFloatFilter } from './nested-float-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';

export class NestedIntWithAggregatesFilter {
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
