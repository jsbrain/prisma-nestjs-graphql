import { CommentUncheckedCreateNestedManyWithoutArticleInput } from '../comment/comment-unchecked-create-nested-many-without-article.input';

export class ArticleUncheckedCreateWithoutAuthorInput {

    id?: string;

    slug!: string;

    title!: string;

    description!: string;

    body!: string;

    createdAt?: Date | string;

    updatedAt?: Date | string;

    favoritesCount?: number;

    active?: boolean;

    comments?: CommentUncheckedCreateNestedManyWithoutArticleInput;
}
