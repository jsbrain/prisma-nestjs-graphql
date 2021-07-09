import { SortOrder } from '../prisma/sort-order.enum';

/**
 * NOTE: We currently do not need, neither support user.
 * This user model is soely for demonstration and testing purposes.
 * @default - false
 */
export class SuperUserSumOrderByAggregateInput {
    /** Users age. @example 28 */
    age?: SortOrder;

    /** Random number string to test value conversion etc. @example test123 */
    numberString?: SortOrder;
}
