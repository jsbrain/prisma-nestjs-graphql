import { CommentUpdateInput } from './comment-update.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

export class UpdateOneCommentArgs {

    data!: CommentUpdateInput;

    where!: CommentWhereUniqueInput;
}
