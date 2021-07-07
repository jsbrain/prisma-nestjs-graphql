import { TagCreateNestedManyWithoutArticlesInput } from '../tag/tag-create-nested-many-without-articles.input';
import { UserCreateNestedOneWithoutArticlesInput } from '../user/user-create-nested-one-without-articles.input';
import { UserCreateNestedManyWithoutFavoriteArticlesInput } from '../user/user-create-nested-many-without-favorite-articles.input';

export class ArticleCreateWithoutCommentsInput {
    id?: string;

    slug!: string;

    title!: string;

    description!: string;

    body!: string;

    createdAt?: Date | string;

    updatedAt?: Date | string;

    favoritesCount?: number;

    active?: boolean;

    tags?: TagCreateNestedManyWithoutArticlesInput;

    author!: UserCreateNestedOneWithoutArticlesInput;

    favoritedBy?: UserCreateNestedManyWithoutFavoriteArticlesInput;
}
