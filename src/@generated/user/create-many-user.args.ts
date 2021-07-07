import { UserCreateManyInput } from './user-create-many.input';

export class CreateManyUserArgs {
    data!: Array<UserCreateManyInput>;

    skipDuplicates?: boolean;
}
