import { SortOrder } from '../prisma/sort-order.enum';

/**
 * NOTE: We currently do not need, neither support user.
 * This user model is soely for demonstration and testing purposes.
 * @default - false
 */
export class SuperUserCountOrderByAggregateInput {
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
}
