import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFavoriteArticlesInput } from './user-update-without-favorite-articles.input';
import { UserCreateWithoutFavoriteArticlesInput } from './user-create-without-favorite-articles.input';

export class UserUpsertWithWhereUniqueWithoutFavoriteArticlesInput {

    where!: UserWhereUniqueInput;

    update!: UserUpdateWithoutFavoriteArticlesInput;

    create!: UserCreateWithoutFavoriteArticlesInput;
}
