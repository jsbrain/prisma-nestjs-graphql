import { ApiExtraModels } from '@nestjs/swagger';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFavoriteArticlesInput } from './user-update-without-favorite-articles.input';

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
