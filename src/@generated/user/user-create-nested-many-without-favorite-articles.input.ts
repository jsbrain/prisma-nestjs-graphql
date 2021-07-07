import { UserCreateWithoutFavoriteArticlesInput } from './user-create-without-favorite-articles.input';
import { UserCreateOrConnectWithoutFavoriteArticlesInput } from './user-create-or-connect-without-favorite-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

export class UserCreateNestedManyWithoutFavoriteArticlesInput {

    create?: Array<UserCreateWithoutFavoriteArticlesInput>;

    connectOrCreate?: Array<UserCreateOrConnectWithoutFavoriteArticlesInput>;

    connect?: Array<UserWhereUniqueInput>;
}
