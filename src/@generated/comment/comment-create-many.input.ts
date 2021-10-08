export class CommentCreateManyInput {
    id?: string;

    createdAt?: Date | string;

    updatedAt?: Date | string;

    body!: string;

    authorId!: string;

    articleId?: string;
}
