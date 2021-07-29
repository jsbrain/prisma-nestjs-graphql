import { ApiExtraModels } from '@nestjs/swagger';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFollowersInput } from './user-update-without-followers.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserUpdateWithWhereUniqueWithoutFollowersInput {

    where!: UserWhereUniqueInput;

    data!: UserUpdateWithoutFollowersInput;
}
