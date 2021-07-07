import { UserCreateWithoutFollowersInput } from './user-create-without-followers.input';
import { UserCreateOrConnectWithoutFollowersInput } from './user-create-or-connect-without-followers.input';
import { UserUpsertWithWhereUniqueWithoutFollowersInput } from './user-upsert-with-where-unique-without-followers.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutFollowersInput } from './user-update-with-where-unique-without-followers.input';
import { UserUpdateManyWithWhereWithoutFollowersInput } from './user-update-many-with-where-without-followers.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

export class UserUpdateManyWithoutFollowersInput {
    create?: Array<UserCreateWithoutFollowersInput>;

    connectOrCreate?: Array<UserCreateOrConnectWithoutFollowersInput>;

    upsert?: Array<UserUpsertWithWhereUniqueWithoutFollowersInput>;

    connect?: Array<UserWhereUniqueInput>;

    set?: Array<UserWhereUniqueInput>;

    disconnect?: Array<UserWhereUniqueInput>;

    delete?: Array<UserWhereUniqueInput>;

    update?: Array<UserUpdateWithWhereUniqueWithoutFollowersInput>;

    updateMany?: Array<UserUpdateManyWithWhereWithoutFollowersInput>;

    deleteMany?: Array<UserScalarWhereInput>;
}
