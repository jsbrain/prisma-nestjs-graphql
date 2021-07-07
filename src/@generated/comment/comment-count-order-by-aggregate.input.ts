import { SortOrder } from '../prisma/sort-order.enum';

export class CommentCountOrderByAggregateInput {
    id?: SortOrder;

    createdAt?: SortOrder;

    updatedAt?: SortOrder;

    body?: SortOrder;

    authorId?: SortOrder;

    articleId?: SortOrder;
}
