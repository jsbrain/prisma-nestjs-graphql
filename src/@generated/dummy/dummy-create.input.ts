import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { GraphQLJSON } from 'graphql-type-json';
import { DummyCreatefriendsInput } from '../prisma/dummy-createfriends.input';

export class DummyCreateInput {
    id!: string;

    created?: Date | string;

    floaty!: number;

    int?: number;

    float?: number;

    bytes?: Buffer;

    decimal?: any;

    bigInt?: bigint | number;

    json?: any;

    friends?: DummyCreatefriendsInput;
}
