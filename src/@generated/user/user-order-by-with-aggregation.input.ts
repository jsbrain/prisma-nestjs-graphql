import { ApiExtraModels } from '@nestjs/swagger';

import { SortOrder } from '../prisma/sort-order.enum';
import { UserAvgOrderByAggregateInput } from './user-avg-order-by-aggregate.input';
import { UserCountOrderByAggregateInput } from './user-count-order-by-aggregate.input';
import { UserMaxOrderByAggregateInput } from './user-max-order-by-aggregate.input';
import { UserMinOrderByAggregateInput } from './user-min-order-by-aggregate.input';
import { UserSumOrderByAggregateInput } from './user-sum-order-by-aggregate.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserOrderByWithAggregationInput {

    /** The id of the user */
    id?: SortOrder;

    age?: SortOrder;

    /**
     * This is a js doc comment!
     * And we can continue the comment on the next line as well :)
     */
    email?: SortOrder;

    /** User's name */
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
