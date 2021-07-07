import { ApiExtraModels } from '@nestjs/swagger';
import { UserCreateWithoutFavoriteArticlesInput } from './user-create-without-favorite-articles.input';
import { UserCreateOrConnectWithoutFavoriteArticlesInput } from './user-create-or-connect-without-favorite-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserCreateNestedManyWithoutFavoriteArticlesInput {
    create?: Array<UserCreateWithoutFavoriteArticlesInput>;

    connectOrCreate?: Array<UserCreateOrConnectWithoutFavoriteArticlesInput>;

    connect?: Array<UserWhereUniqueInput>;
}
