import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

import { NestedDecimalNullableFilter } from './nested-decimal-nullable-filter.input';

export class DecimalNullableFilter {

    equals?: any;

    in?: Array<any>;

    notIn?: Array<any>;

    lt?: any;

    lte?: any;

    gt?: any;

    gte?: any;

    not?: NestedDecimalNullableFilter;
}
