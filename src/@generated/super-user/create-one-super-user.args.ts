import { SuperUserCreateInput } from './super-user-create.input';

/**
 * NOTE: We currently do not need, neither support user.
 * This user model is soely for demonstration and testing purposes.
 * @default - false
 */
export class CreateOneSuperUserArgs {
    data!: SuperUserCreateInput;
}
