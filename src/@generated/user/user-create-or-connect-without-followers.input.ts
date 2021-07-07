import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutFollowersInput } from './user-create-without-followers.input';

export class UserCreateOrConnectWithoutFollowersInput {
    where!: UserWhereUniqueInput;

    create!: UserCreateWithoutFollowersInput;
}
