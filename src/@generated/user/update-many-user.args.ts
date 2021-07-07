import { UserUpdateManyMutationInput } from './user-update-many-mutation.input';
import { UserWhereInput } from './user-where.input';

export class UpdateManyUserArgs {
    data!: UserUpdateManyMutationInput;

    where?: UserWhereInput;
}
