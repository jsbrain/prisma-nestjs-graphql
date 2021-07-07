import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFollowersInput } from './user-update-without-followers.input';
import { UserCreateWithoutFollowersInput } from './user-create-without-followers.input';

export class UserUpsertWithWhereUniqueWithoutFollowersInput {
    where!: UserWhereUniqueInput;

    update!: UserUpdateWithoutFollowersInput;

    create!: UserCreateWithoutFollowersInput;
}
