import { ApiExtraModels } from '@nestjs/swagger';

import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';
import { UserUpdateWithoutFollowingInput } from './user-update-without-following.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserUpsertWithWhereUniqueWithoutFollowingInput {

    where!: UserWhereUniqueInput;

    update!: UserUpdateWithoutFollowingInput;

    create!: UserCreateWithoutFollowingInput;
}
