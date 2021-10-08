import { CommentUncheckedCreateNestedManyWithoutArticleInput } from '../comment/comment-unchecked-create-nested-many-without-article.input';

export class ArticleUncheckedCreateWithoutTagsInput {

    id?: string;

    slug!: string;

    title!: string;

    description!: string;

    body!: string;

    createdAt?: Date | string;

    updatedAt?: Date | string;

    favoritesCount?: number;

    authorId!: string;

    active?: boolean;

    comments?: CommentUncheckedCreateNestedManyWithoutArticleInput;
}
