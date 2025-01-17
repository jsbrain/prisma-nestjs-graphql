import { CommentCountAggregateInput } from './comment-count-aggregate.input';
import { CommentMaxAggregateInput } from './comment-max-aggregate.input';
import { CommentMinAggregateInput } from './comment-min-aggregate.input';
import { CommentOrderByWithAggregationInput } from './comment-order-by-with-aggregation.input';
import { CommentScalarFieldEnum } from './comment-scalar-field.enum';
import { CommentScalarWhereWithAggregatesInput } from './comment-scalar-where-with-aggregates.input';
import { CommentWhereInput } from './comment-where.input';

export class CommentGroupByArgs {

    where?: CommentWhereInput;

    orderBy?: Array<CommentOrderByWithAggregationInput>;

    by!: Array<CommentScalarFieldEnum>;

    having?: CommentScalarWhereWithAggregatesInput;

    take?: number;

    skip?: number;

    _count?: CommentCountAggregateInput;

    _min?: CommentMinAggregateInput;

    _max?: CommentMaxAggregateInput;
}
