import { ApiExtraModels } from '@nestjs/swagger';

import { UserCreateWithoutCommentsInput } from './user-create-without-comments.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserCreateOrConnectWithoutCommentsInput {
    where!: UserWhereUniqueInput;

    create!: UserCreateWithoutCommentsInput;
}
