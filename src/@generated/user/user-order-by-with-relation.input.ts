import { ApiExtraModels } from '@nestjs/swagger';

import { ArticleOrderByRelationAggregateInput } from '../article/article-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByRelationAggregateInput } from './user-order-by-relation-aggregate.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserOrderByWithRelationInput {
    /** The id of the user */
    id?: SortOrder;

    age?: SortOrder;

    /**
     * This is a js doc comment!
     * And we can continue the comment on the next line as well :)
     */
    email?: SortOrder;

    /** User's name */
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
