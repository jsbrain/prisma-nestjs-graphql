import { ApiExtraModels } from '@nestjs/swagger';

import { UserCreateWithoutFavoriteArticlesInput } from './user-create-without-favorite-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserCreateOrConnectWithoutFavoriteArticlesInput {

    where!: UserWhereUniqueInput;

    create!: UserCreateWithoutFavoriteArticlesInput;
}
