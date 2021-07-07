import { ArticleCreateNestedOneWithoutCommentsInput } from '../article/article-create-nested-one-without-comments.input';

export class CommentCreateWithoutAuthorInput {

    id?: string;

    createdAt?: Date | string;

    updatedAt?: Date | string;

    body!: string;

    article?: ArticleCreateNestedOneWithoutCommentsInput;
}
