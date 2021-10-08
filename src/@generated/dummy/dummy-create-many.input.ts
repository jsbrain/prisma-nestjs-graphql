import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

import { DummyCreateManyfriendsInput } from './dummy-create-manyfriends.input';

export class DummyCreateManyInput {

    id!: string;

    created?: Date | string;

    floaty!: number;

    int?: number;

    float?: number;

    bytes?: Buffer;

    decimal?: any;

    bigInt?: bigint | number;

    json?: any;

    friends?: DummyCreateManyfriendsInput;
}
