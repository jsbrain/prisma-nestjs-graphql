import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';

export class UserCreateOrConnectWithoutFollowingInput {

    where!: UserWhereUniqueInput;

    create!: UserCreateWithoutFollowingInput;
}
