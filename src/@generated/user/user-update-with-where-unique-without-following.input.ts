import { ApiExtraModels } from '@nestjs/swagger';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFollowingInput } from './user-update-without-following.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserUpdateWithWhereUniqueWithoutFollowingInput {
    where!: UserWhereUniqueInput;

    data!: UserUpdateWithoutFollowingInput;
}
