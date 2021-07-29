import { DummyWhereInput } from '../dummy/dummy-where.input';
import { DummyOrderByWithRelationInput } from '../dummy/dummy-order-by-with-relation.input';
import { DummyWhereUniqueInput } from '../dummy/dummy-where-unique.input';
import { DummyCountAggregateInput } from '../dummy/dummy-count-aggregate.input';
import { DummyAvgAggregateInput } from '../dummy/dummy-avg-aggregate.input';
import { DummySumAggregateInput } from '../dummy/dummy-sum-aggregate.input';
import { DummyMinAggregateInput } from '../dummy/dummy-min-aggregate.input';
import { DummyMaxAggregateInput } from '../dummy/dummy-max-aggregate.input';

export class DummyAggregateArgs {

    where?: DummyWhereInput;

    orderBy?: Array<DummyOrderByWithRelationInput>;

    cursor?: DummyWhereUniqueInput;

    take?: number;

    skip?: number;

    _count?: DummyCountAggregateInput;

    _avg?: DummyAvgAggregateInput;

    _sum?: DummySumAggregateInput;

    _min?: DummyMinAggregateInput;

    _max?: DummyMaxAggregateInput;
}
