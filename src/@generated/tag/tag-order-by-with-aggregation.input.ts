import { SortOrder } from '../prisma/sort-order.enum';
import { TagCountOrderByAggregateInput } from './tag-count-order-by-aggregate.input';
import { TagMaxOrderByAggregateInput } from './tag-max-order-by-aggregate.input';
import { TagMinOrderByAggregateInput } from './tag-min-order-by-aggregate.input';

export class TagOrderByWithAggregationInput {
    id?: SortOrder;

    name?: SortOrder;

    _count?: TagCountOrderByAggregateInput;

    _max?: TagMaxOrderByAggregateInput;

    _min?: TagMinOrderByAggregateInput;
}
