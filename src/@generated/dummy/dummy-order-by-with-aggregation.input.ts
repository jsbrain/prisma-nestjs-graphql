import { SortOrder } from '../prisma/sort-order.enum';
import { DummyAvgOrderByAggregateInput } from './dummy-avg-order-by-aggregate.input';
import { DummyCountOrderByAggregateInput } from './dummy-count-order-by-aggregate.input';
import { DummyMaxOrderByAggregateInput } from './dummy-max-order-by-aggregate.input';
import { DummyMinOrderByAggregateInput } from './dummy-min-order-by-aggregate.input';
import { DummySumOrderByAggregateInput } from './dummy-sum-order-by-aggregate.input';

export class DummyOrderByWithAggregationInput {
    id?: SortOrder;

    created?: SortOrder;

    floaty?: SortOrder;

    int?: SortOrder;

    float?: SortOrder;

    bytes?: SortOrder;

    decimal?: SortOrder;

    bigInt?: SortOrder;

    json?: SortOrder;

    friends?: SortOrder;

    _count?: DummyCountOrderByAggregateInput;

    _avg?: DummyAvgOrderByAggregateInput;

    _max?: DummyMaxOrderByAggregateInput;

    _min?: DummyMinOrderByAggregateInput;

    _sum?: DummySumOrderByAggregateInput;
}
