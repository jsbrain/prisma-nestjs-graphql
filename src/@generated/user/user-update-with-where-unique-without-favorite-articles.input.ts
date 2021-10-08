import { ApiExtraModels } from '@nestjs/swagger';

import { UserUpdateWithoutFavoriteArticlesInput } from './user-update-without-favorite-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserUpdateWithWhereUniqueWithoutFavoriteArticlesInput {
    where!: UserWhereUniqueInput;

    data!: UserUpdateWithoutFavoriteArticlesInput;
}
