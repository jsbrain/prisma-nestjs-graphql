import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';

export class IntNullableFilter {
    equals?: number;

    in?: Array<number>;

    notIn?: Array<number>;

    lt?: number;

    lte?: number;

    gt?: number;

    gte?: number;

    not?: NestedIntNullableFilter;
}
