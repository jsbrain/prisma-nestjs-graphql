import { NestedIntFilter } from './nested-int-filter.input';

export class IntFilter {

    equals?: number;

    in?: Array<number>;

    notIn?: Array<number>;

    lt?: number;

    lte?: number;

    gt?: number;

    gte?: number;

    not?: NestedIntFilter;
}
