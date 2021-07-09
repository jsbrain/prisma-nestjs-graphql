import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { JsonObject } from 'type-fest';
import { DummyCreatefriendsInput } from '../prisma/dummy-createfriends.input';

export class DummyUncheckedCreateInput {
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
