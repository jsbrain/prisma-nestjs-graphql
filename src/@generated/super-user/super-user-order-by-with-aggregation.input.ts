import { SortOrder } from '../prisma/sort-order.enum';
import { SuperUserCountOrderByAggregateInput } from './super-user-count-order-by-aggregate.input';
import { SuperUserAvgOrderByAggregateInput } from './super-user-avg-order-by-aggregate.input';
import { SuperUserMaxOrderByAggregateInput } from './super-user-max-order-by-aggregate.input';
import { SuperUserMinOrderByAggregateInput } from './super-user-min-order-by-aggregate.input';
import { SuperUserSumOrderByAggregateInput } from './super-user-sum-order-by-aggregate.input';

/**
 * NOTE: We currently do not need, neither support user.
 * This user model is soely for demonstration and testing purposes.
 * @default - false
 */
export class SuperUserOrderByWithAggregationInput {
    id?: SortOrder;

    /** Valid email for each user 📧. @unique */
    email?: SortOrder;

    password?: SortOrder;

    /** Users name including all pre and surnames. @example John Doe */
    name?: SortOrder;

    /** Users age. @example 28 */
    age?: SortOrder;

    /** Random number string to test value conversion etc. @example test123 */
    numberString?: SortOrder;

    /** The role of the user for RBAC. */
    role?: SortOrder;

    _count?: SuperUserCountOrderByAggregateInput;

    _avg?: SuperUserAvgOrderByAggregateInput;

    _max?: SuperUserMaxOrderByAggregateInput;

    _min?: SuperUserMinOrderByAggregateInput;

    _sum?: SuperUserSumOrderByAggregateInput;
}
