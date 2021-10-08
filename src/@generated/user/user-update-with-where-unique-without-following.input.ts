import { ApiExtraModels } from '@nestjs/swagger';

import { UserUpdateWithoutFollowingInput } from './user-update-without-following.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

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
