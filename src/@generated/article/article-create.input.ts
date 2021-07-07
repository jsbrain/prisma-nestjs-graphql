import { TagCreateNestedManyWithoutArticlesInput } from '../tag/tag-create-nested-many-without-articles.input';
import { UserCreateNestedOneWithoutArticlesInput } from '../user/user-create-nested-one-without-articles.input';
import { UserCreateNestedManyWithoutFavoriteArticlesInput } from '../user/user-create-nested-many-without-favorite-articles.input';
import { CommentCreateNestedManyWithoutArticleInput } from '../comment/comment-create-nested-many-without-article.input';

export class ArticleCreateInput {
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

    comments?: CommentCreateNestedManyWithoutArticleInput;
}
