import { CommentCreateNestedManyWithoutArticleInput } from '../comment/comment-create-nested-many-without-article.input';
import { TagCreateNestedManyWithoutArticlesInput } from '../tag/tag-create-nested-many-without-articles.input';
import { UserCreateNestedOneWithoutArticlesInput } from '../user/user-create-nested-one-without-articles.input';

export class ArticleCreateWithoutFavoritedByInput {
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

    comments?: CommentCreateNestedManyWithoutArticleInput;
}
