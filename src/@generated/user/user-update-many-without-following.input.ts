import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';
import { UserCreateOrConnectWithoutFollowingInput } from './user-create-or-connect-without-following.input';
import { UserUpsertWithWhereUniqueWithoutFollowingInput } from './user-upsert-with-where-unique-without-following.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutFollowingInput } from './user-update-with-where-unique-without-following.input';
import { UserUpdateManyWithWhereWithoutFollowingInput } from './user-update-many-with-where-without-following.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

export class UserUpdateManyWithoutFollowingInput {
    create?: Array<UserCreateWithoutFollowingInput>;

    connectOrCreate?: Array<UserCreateOrConnectWithoutFollowingInput>;

    upsert?: Array<UserUpsertWithWhereUniqueWithoutFollowingInput>;

    connect?: Array<UserWhereUniqueInput>;

    set?: Array<UserWhereUniqueInput>;

    disconnect?: Array<UserWhereUniqueInput>;

    delete?: Array<UserWhereUniqueInput>;

    update?: Array<UserUpdateWithWhereUniqueWithoutFollowingInput>;

    updateMany?: Array<UserUpdateManyWithWhereWithoutFollowingInput>;

    deleteMany?: Array<UserScalarWhereInput>;
}
