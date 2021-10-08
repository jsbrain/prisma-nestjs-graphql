import { ApiExtraModels } from '@nestjs/swagger';

import { UserCreateWithoutCommentsInput } from './user-create-without-comments.input';
import { UserUpdateWithoutCommentsInput } from './user-update-without-comments.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserUpsertWithoutCommentsInput {

    update!: UserUpdateWithoutCommentsInput;

    create!: UserCreateWithoutCommentsInput;
}
