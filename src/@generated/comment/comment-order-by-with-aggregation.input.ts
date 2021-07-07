import { SortOrder } from '../prisma/sort-order.enum';
import { CommentCountOrderByAggregateInput } from './comment-count-order-by-aggregate.input';
import { CommentMaxOrderByAggregateInput } from './comment-max-order-by-aggregate.input';
import { CommentMinOrderByAggregateInput } from './comment-min-order-by-aggregate.input';

export class CommentOrderByWithAggregationInput {
    id?: SortOrder;

    createdAt?: SortOrder;

    updatedAt?: SortOrder;

    body?: SortOrder;

    authorId?: SortOrder;

    articleId?: SortOrder;

    _count?: CommentCountOrderByAggregateInput;

    _max?: CommentMaxOrderByAggregateInput;

    _min?: CommentMinOrderByAggregateInput;
}
