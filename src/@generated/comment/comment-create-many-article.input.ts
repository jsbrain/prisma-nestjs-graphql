export class CommentCreateManyArticleInput {
    id?: string;

    createdAt?: Date | string;

    updatedAt?: Date | string;

    body!: string;

    authorId!: string;
}
