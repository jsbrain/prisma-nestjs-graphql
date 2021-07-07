import { NestedBigIntNullableFilter } from './nested-big-int-nullable-filter.input';

export class BigIntNullableFilter {
    equals?: bigint | number;

    in?: Array<bigint> | Array<number>;

    notIn?: Array<bigint> | Array<number>;

    lt?: bigint | number;

    lte?: bigint | number;

    gt?: bigint | number;

    gte?: bigint | number;

    not?: NestedBigIntNullableFilter;
}
