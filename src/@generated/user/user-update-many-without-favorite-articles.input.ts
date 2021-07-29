import { ApiExtraModels } from '@nestjs/swagger';
import { UserCreateWithoutFavoriteArticlesInput } from './user-create-without-favorite-articles.input';
import { UserCreateOrConnectWithoutFavoriteArticlesInput } from './user-create-or-connect-without-favorite-articles.input';
import { UserUpsertWithWhereUniqueWithoutFavoriteArticlesInput } from './user-upsert-with-where-unique-without-favorite-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutFavoriteArticlesInput } from './user-update-with-where-unique-without-favorite-articles.input';
import { UserUpdateManyWithWhereWithoutFavoriteArticlesInput } from './user-update-many-with-where-without-favorite-articles.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserUpdateManyWithoutFavoriteArticlesInput {

    create?: Array<UserCreateWithoutFavoriteArticlesInput>;

    connectOrCreate?: Array<UserCreateOrConnectWithoutFavoriteArticlesInput>;

    upsert?: Array<UserUpsertWithWhereUniqueWithoutFavoriteArticlesInput>;

    connect?: Array<UserWhereUniqueInput>;

    set?: Array<UserWhereUniqueInput>;

    disconnect?: Array<UserWhereUniqueInput>;

    delete?: Array<UserWhereUniqueInput>;

    update?: Array<UserUpdateWithWhereUniqueWithoutFavoriteArticlesInput>;

    updateMany?: Array<UserUpdateManyWithWhereWithoutFavoriteArticlesInput>;

    deleteMany?: Array<UserScalarWhereInput>;
}
