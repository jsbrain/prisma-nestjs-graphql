import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';

/**
 * NOTE: We currently do not need, neither support user.
 * This user model is soely for demonstration and testing purposes.
 * @default - false
 */
export class SuperUserUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput;

    /** Valid email for each user 📧. @unique */
    email?: StringFieldUpdateOperationsInput;

    password?: StringFieldUpdateOperationsInput;

    /** Users name including all pre and surnames. @example John Doe */
    name?: NullableStringFieldUpdateOperationsInput;

    /** Users age. @example 28 */
    age?: NullableIntFieldUpdateOperationsInput;

    /** Random number string to test value conversion etc. @example test123 */
    numberString?: NullableIntFieldUpdateOperationsInput;

    /** The role of the user for RBAC. */
    role?: EnumRoleFieldUpdateOperationsInput;
}
