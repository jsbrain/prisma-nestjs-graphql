import { ApiExtraModels } from '@nestjs/swagger';
import { UserCreateWithoutFollowersInput } from './user-create-without-followers.input';
import { UserCreateOrConnectWithoutFollowersInput } from './user-create-or-connect-without-followers.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserCreateNestedManyWithoutFollowersInput {
    create?: Array<UserCreateWithoutFollowersInput>;

    connectOrCreate?: Array<UserCreateOrConnectWithoutFollowersInput>;

    connect?: Array<UserWhereUniqueInput>;
}
