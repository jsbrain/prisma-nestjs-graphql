import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';
import { UserCreateOrConnectWithoutFollowingInput } from './user-create-or-connect-without-following.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

export class UserCreateNestedManyWithoutFollowingInput {

    create?: Array<UserCreateWithoutFollowingInput>;

    connectOrCreate?: Array<UserCreateOrConnectWithoutFollowingInput>;

    connect?: Array<UserWhereUniqueInput>;
}
