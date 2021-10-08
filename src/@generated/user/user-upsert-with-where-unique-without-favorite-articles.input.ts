import { ApiExtraModels } from '@nestjs/swagger';

import { UserCreateWithoutFavoriteArticlesInput } from './user-create-without-favorite-articles.input';
import { UserUpdateWithoutFavoriteArticlesInput } from './user-update-without-favorite-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserUpsertWithWhereUniqueWithoutFavoriteArticlesInput {

    where!: UserWhereUniqueInput;

    update!: UserUpdateWithoutFavoriteArticlesInput;

    create!: UserCreateWithoutFavoriteArticlesInput;
}
