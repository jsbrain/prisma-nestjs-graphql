import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { EnumRoleWithAggregatesFilter } from '../prisma/enum-role-with-aggregates-filter.input';

/**
 * NOTE: We currently do not need, neither support user.
 * This user model is soely for demonstration and testing purposes.
 * @default - false
 */
export class SuperUserScalarWhereWithAggregatesInput {
    AND?: Array<SuperUserScalarWhereWithAggregatesInput>;

    OR?: Array<SuperUserScalarWhereWithAggregatesInput>;

    NOT?: Array<SuperUserScalarWhereWithAggregatesInput>;

    id?: StringWithAggregatesFilter;

    /** Valid email for each user 📧. @unique */
    email?: StringWithAggregatesFilter;

    password?: StringWithAggregatesFilter;

    /** Users name including all pre and surnames. @example John Doe */
    name?: StringNullableWithAggregatesFilter;

    /** Users age. @example 28 */
    age?: IntNullableWithAggregatesFilter;

    /** Random number string to test value conversion etc. @example test123 */
    numberString?: IntNullableWithAggregatesFilter;

    /** The role of the user for RBAC. */
    role?: EnumRoleWithAggregatesFilter;
}
