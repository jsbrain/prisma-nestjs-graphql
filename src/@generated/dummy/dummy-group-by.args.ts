import { DummyAvgAggregateInput } from './dummy-avg-aggregate.input';
import { DummyCountAggregateInput } from './dummy-count-aggregate.input';
import { DummyMaxAggregateInput } from './dummy-max-aggregate.input';
import { DummyMinAggregateInput } from './dummy-min-aggregate.input';
import { DummyOrderByWithAggregationInput } from './dummy-order-by-with-aggregation.input';
import { DummyScalarFieldEnum } from './dummy-scalar-field.enum';
import { DummyScalarWhereWithAggregatesInput } from './dummy-scalar-where-with-aggregates.input';
import { DummySumAggregateInput } from './dummy-sum-aggregate.input';
import { DummyWhereInput } from './dummy-where.input';

export class DummyGroupByArgs {
    where?: DummyWhereInput;

    orderBy?: Array<DummyOrderByWithAggregationInput>;

    by!: Array<DummyScalarFieldEnum>;

    having?: DummyScalarWhereWithAggregatesInput;

    take?: number;

    skip?: number;

    _count?: DummyCountAggregateInput;

    _avg?: DummyAvgAggregateInput;

    _sum?: DummySumAggregateInput;

    _min?: DummyMinAggregateInput;

    _max?: DummyMaxAggregateInput;
}
