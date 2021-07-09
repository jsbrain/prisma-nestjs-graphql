import { SuperUserUpdateManyMutationInput } from './super-user-update-many-mutation.input';
import { SuperUserWhereInput } from './super-user-where.input';

/**
 * NOTE: We currently do not need, neither support user.
 * This user model is soely for demonstration and testing purposes.
 * @default - false
 */
export class UpdateManySuperUserArgs {
    data!: SuperUserUpdateManyMutationInput;

    where?: SuperUserWhereInput;
}
