import { ApiExtraModels } from '@nestjs/swagger';

import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';
import { UserUpdateWithoutArticlesInput } from './user-update-without-articles.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserUpsertWithoutArticlesInput {
    update!: UserUpdateWithoutArticlesInput;

    create!: UserCreateWithoutArticlesInput;
}
