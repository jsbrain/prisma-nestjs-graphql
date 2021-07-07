import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFollowingInput } from './user-update-without-following.input';
import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';

export class UserUpsertWithWhereUniqueWithoutFollowingInput {

    where!: UserWhereUniqueInput;

    update!: UserUpdateWithoutFollowingInput;

    create!: UserCreateWithoutFollowingInput;
}
