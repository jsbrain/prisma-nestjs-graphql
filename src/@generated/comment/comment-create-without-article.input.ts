import { UserCreateNestedOneWithoutCommentsInput } from '../user/user-create-nested-one-without-comments.input';

export class CommentCreateWithoutArticleInput {
    id?: string;

    createdAt?: Date | string;

    updatedAt?: Date | string;

    body!: string;

    author!: UserCreateNestedOneWithoutCommentsInput;
}
