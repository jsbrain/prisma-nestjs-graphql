import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { TagOrderByRelationAggregateInput } from '../tag/tag-order-by-relation-aggregate.input';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

export class ArticleOrderByWithRelationInput {

    id?: SortOrder;

    slug?: SortOrder;

    title?: SortOrder;

    description?: SortOrder;

    body?: SortOrder;

    tags?: TagOrderByRelationAggregateInput;

    createdAt?: SortOrder;

    updatedAt?: SortOrder;

    favoritesCount?: SortOrder;

    author?: UserOrderByWithRelationInput;

    authorId?: SortOrder;

    favoritedBy?: UserOrderByRelationAggregateInput;

    comments?: CommentOrderByRelationAggregateInput;

    active?: SortOrder;
}
