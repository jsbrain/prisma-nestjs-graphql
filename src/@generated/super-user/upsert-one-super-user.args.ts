import { SuperUserWhereUniqueInput } from './super-user-where-unique.input';
import { SuperUserCreateInput } from './super-user-create.input';
import { SuperUserUpdateInput } from './super-user-update.input';

/**
 * NOTE: We currently do not need, neither support user.
 * This user model is soely for demonstration and testing purposes.
 * @default - false
 */
export class UpsertOneSuperUserArgs {
    where!: SuperUserWhereUniqueInput;

    create!: SuperUserCreateInput;

    update!: SuperUserUpdateInput;
}
