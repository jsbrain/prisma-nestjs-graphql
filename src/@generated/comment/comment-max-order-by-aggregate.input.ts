import { SortOrder } from '../prisma/sort-order.enum';

export class CommentMaxOrderByAggregateInput {
    id?: SortOrder;

    createdAt?: SortOrder;

    updatedAt?: SortOrder;

    body?: SortOrder;

    authorId?: SortOrder;

    articleId?: SortOrder;
}
