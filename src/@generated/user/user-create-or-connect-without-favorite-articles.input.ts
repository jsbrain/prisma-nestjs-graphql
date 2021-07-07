import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutFavoriteArticlesInput } from './user-create-without-favorite-articles.input';

export class UserCreateOrConnectWithoutFavoriteArticlesInput {

    where!: UserWhereUniqueInput;

    create!: UserCreateWithoutFavoriteArticlesInput;
}
