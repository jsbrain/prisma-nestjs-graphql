import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { GraphQLJSON } from 'graphql-type-json';
import { DummyCountAggregate } from './dummy-count-aggregate.output';
import { DummyAvgAggregate } from './dummy-avg-aggregate.output';
import { DummySumAggregate } from './dummy-sum-aggregate.output';
import { DummyMinAggregate } from './dummy-min-aggregate.output';
import { DummyMaxAggregate } from './dummy-max-aggregate.output';

export class DummyGroupBy {
    id!: string;

    created!: Date | string;

    floaty!: number;

    int?: number;

    float?: number;

    bytes?: Buffer;

    decimal?: any;

    bigInt?: bigint | number;

    json?: any;

    friends?: Array<string>;

    _count?: DummyCountAggregate;

    _avg?: DummyAvgAggregate;

    _sum?: DummySumAggregate;

    _min?: DummyMinAggregate;

    _max?: DummyMaxAggregate;
}
