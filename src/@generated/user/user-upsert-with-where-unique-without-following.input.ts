import { ApiExtraModels } from '@nestjs/swagger';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFollowingInput } from './user-update-without-following.input';
import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';

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
