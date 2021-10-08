import { CommentCreateInput } from './comment-create.input';
import { CommentUpdateInput } from './comment-update.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

export class UpsertOneCommentArgs {

    where!: CommentWhereUniqueInput;

    create!: CommentCreateInput;

    update!: CommentUpdateInput;
}
