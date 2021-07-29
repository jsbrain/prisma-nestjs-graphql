import { ApiExtraModels } from '@nestjs/swagger';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFollowersInput } from './user-update-without-followers.input';
import { UserCreateWithoutFollowersInput } from './user-create-without-followers.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserUpsertWithWhereUniqueWithoutFollowersInput {

    where!: UserWhereUniqueInput;

    update!: UserUpdateWithoutFollowersInput;

    create!: UserCreateWithoutFollowersInput;
}
