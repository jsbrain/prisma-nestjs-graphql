import { CommentCreateManyInput } from './comment-create-many.input';

export class CreateManyCommentArgs {
    data!: Array<CommentCreateManyInput>;

    skipDuplicates?: boolean;
}
