import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';

/**
 * NOTE: We currently do not need, neither support user.
 * This user model is soely for demonstration and testing purposes.
 * @default - false
 */
export class SuperUserWhereInput {
    AND?: Array<SuperUserWhereInput>;

    OR?: Array<SuperUserWhereInput>;

    NOT?: Array<SuperUserWhereInput>;

    id?: StringFilter;

    /** Valid email for each user 📧. @unique */
    email?: StringFilter;

    password?: StringFilter;

    /** Users name including all pre and surnames. @example John Doe */
    name?: StringNullableFilter;

    /** Users age. @example 28 */
    age?: IntNullableFilter;

    /** Random number string to test value conversion etc. @example test123 */
    numberString?: IntNullableFilter;

    /** The role of the user for RBAC. */
    role?: EnumRoleFilter;
}
