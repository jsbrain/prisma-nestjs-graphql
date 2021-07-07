import { CommentUpdateManyMutationInput } from './comment-update-many-mutation.input';
import { CommentWhereInput } from './comment-where.input';

export class UpdateManyCommentArgs {

    data!: CommentUpdateManyMutationInput;

    where?: CommentWhereInput;
}
