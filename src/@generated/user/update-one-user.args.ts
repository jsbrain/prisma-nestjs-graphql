import { UserUpdateInput } from './user-update.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

export class UpdateOneUserArgs {

    data!: UserUpdateInput;

    where!: UserWhereUniqueInput;
}
