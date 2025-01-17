import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

export class DummyMinAggregate {

    id?: string;

    created?: Date | string;

    floaty?: number;

    int?: number;

    float?: number;

    bytes?: Buffer;

    decimal?: any;

    bigInt?: bigint | number;
}
