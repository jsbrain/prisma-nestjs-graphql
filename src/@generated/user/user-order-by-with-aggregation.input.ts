import { SortOrder } from '../prisma/sort-order.enum';
import { UserCountOrderByAggregateInput } from './user-count-order-by-aggregate.input';
import { UserAvgOrderByAggregateInput } from './user-avg-order-by-aggregate.input';
import { UserMaxOrderByAggregateInput } from './user-max-order-by-aggregate.input';
import { UserMinOrderByAggregateInput } from './user-min-order-by-aggregate.input';
import { UserSumOrderByAggregateInput } from './user-sum-order-by-aggregate.input';

export class UserOrderByWithAggregationInput {

    id?: SortOrder;

    age?: SortOrder;

    email?: SortOrder;

    name?: SortOrder;

    password?: SortOrder;

    bio?: SortOrder;

    image?: SortOrder;

    countComments?: SortOrder;

    rating?: SortOrder;

    role?: SortOrder;

    _count?: UserCountOrderByAggregateInput;

    _avg?: UserAvgOrderByAggregateInput;

    _max?: UserMaxOrderByAggregateInput;

    _min?: UserMinOrderByAggregateInput;

    _sum?: UserSumOrderByAggregateInput;
}
