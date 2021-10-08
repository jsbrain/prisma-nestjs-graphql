import { ArticleOrderByWithRelationInput } from '../article/article-order-by-with-relation.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

export class CommentOrderByWithRelationInput {
    id?: SortOrder;

    createdAt?: SortOrder;

    updatedAt?: SortOrder;

    body?: SortOrder;

    author?: UserOrderByWithRelationInput;

    authorId?: SortOrder;

    article?: ArticleOrderByWithRelationInput;

    articleId?: SortOrder;
}
