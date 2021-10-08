import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

import { NestedDecimalNullableFilter } from './nested-decimal-nullable-filter.input';
import { NestedDecimalNullableWithAggregatesFilter } from './nested-decimal-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';

export class DecimalNullableWithAggregatesFilter {
    equals?: any;

    in?: Array<any>;

    notIn?: Array<any>;

    lt?: any;

    lte?: any;

    gt?: any;

    gte?: any;

    not?: NestedDecimalNullableWithAggregatesFilter;

    _count?: NestedIntNullableFilter;

    _avg?: NestedDecimalNullableFilter;

    _sum?: NestedDecimalNullableFilter;

    _min?: NestedDecimalNullableFilter;

    _max?: NestedDecimalNullableFilter;
}
