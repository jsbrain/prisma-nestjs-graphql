import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByRelationAggregateInput } from './user-order-by-relation-aggregate.input';
import { ArticleOrderByRelationAggregateInput } from '../article/article-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';

export class UserOrderByWithRelationInput {
    id?: SortOrder;

    age?: SortOrder;

    email?: SortOrder;

    name?: SortOrder;

    password?: SortOrder;

    bio?: SortOrder;

    image?: SortOrder;

    following?: UserOrderByRelationAggregateInput;

    followers?: UserOrderByRelationAggregateInput;

    favoriteArticles?: ArticleOrderByRelationAggregateInput;

    articles?: ArticleOrderByRelationAggregateInput;

    comments?: CommentOrderByRelationAggregateInput;

    countComments?: SortOrder;

    rating?: SortOrder;

    role?: SortOrder;
}
