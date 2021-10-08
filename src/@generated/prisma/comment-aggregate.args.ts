import { CommentCountAggregateInput } from '../comment/comment-count-aggregate.input';
import { CommentMaxAggregateInput } from '../comment/comment-max-aggregate.input';
import { CommentMinAggregateInput } from '../comment/comment-min-aggregate.input';
import { CommentOrderByWithRelationInput } from '../comment/comment-order-by-with-relation.input';
import { CommentWhereInput } from '../comment/comment-where.input';
import { CommentWhereUniqueInput } from '../comment/comment-where-unique.input';

export class CommentAggregateArgs {
    where?: CommentWhereInput;

    orderBy?: Array<CommentOrderByWithRelationInput>;

    cursor?: CommentWhereUniqueInput;

    take?: number;

    skip?: number;

    _count?: CommentCountAggregateInput;

    _min?: CommentMinAggregateInput;

    _max?: CommentMaxAggregateInput;
}
