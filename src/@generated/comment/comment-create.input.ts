import { ArticleCreateNestedOneWithoutCommentsInput } from '../article/article-create-nested-one-without-comments.input';
import { UserCreateNestedOneWithoutCommentsInput } from '../user/user-create-nested-one-without-comments.input';

export class CommentCreateInput {
    id?: string;

    createdAt?: Date | string;

    updatedAt?: Date | string;

    body!: string;

    author!: UserCreateNestedOneWithoutCommentsInput;

    article?: ArticleCreateNestedOneWithoutCommentsInput;
}
