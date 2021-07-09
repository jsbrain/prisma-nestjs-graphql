import { SuperUserCreateManyInput } from './super-user-create-many.input';

/**
 * NOTE: We currently do not need, neither support user.
 * This user model is soely for demonstration and testing purposes.
 * @default - false
 */
export class CreateManySuperUserArgs {
    data!: Array<SuperUserCreateManyInput>;

    skipDuplicates?: boolean;
}
