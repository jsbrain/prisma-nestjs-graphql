/**
 * NOTE: We currently do not need, neither support user.
 * This user model is soely for demonstration and testing purposes.
 * @default - false
 */
export class SuperUserCountAggregateInput {
    id?: true;

    /** Valid email for each user 📧. @unique */
    email?: true;

    password?: true;

    /** Users name including all pre and surnames. @example John Doe */
    name?: true;

    /** Users age. @example 28 */
    age?: true;

    /** Random number string to test value conversion etc. @example test123 */
    numberString?: true;

    /** The role of the user for RBAC. */
    role?: true;

    _all?: true;
}
