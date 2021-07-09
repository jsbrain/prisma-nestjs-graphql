import { SuperUserWhereUniqueInput } from './super-user-where-unique.input';

/**
 * NOTE: We currently do not need, neither support user.
 * This user model is soely for demonstration and testing purposes.
 * @default - false
 */
export class FindUniqueSuperUserArgs {
    where!: SuperUserWhereUniqueInput;
}
