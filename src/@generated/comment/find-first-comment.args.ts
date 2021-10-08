import { CommentOrderByWithRelationInput } from './comment-order-by-with-relation.input';
import { CommentScalarFieldEnum } from './comment-scalar-field.enum';
import { CommentWhereInput } from './comment-where.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

export class FindFirstCommentArgs {

    where?: CommentWhereInput;

    orderBy?: Array<CommentOrderByWithRelationInput>;

    cursor?: CommentWhereUniqueInput;

    take?: number;

    skip?: number;

    distinct?: Array<CommentScalarFieldEnum>;
}
