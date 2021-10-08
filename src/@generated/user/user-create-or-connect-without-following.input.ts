import { ApiExtraModels } from '@nestjs/swagger';

import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserCreateOrConnectWithoutFollowingInput {

    where!: UserWhereUniqueInput;

    create!: UserCreateWithoutFollowingInput;
}
