import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { GraphQLJSON } from 'graphql-type-json';

export class Dummy {
    id!: string;

    created!: Date;

    floaty!: number;

    int!: number | null;

    float!: number | null;

    bytes!: Buffer | null;

    decimal!: any | null;

    bigInt!: bigint | null;

    json!: any | null;

    friends!: Array<string>;
}
