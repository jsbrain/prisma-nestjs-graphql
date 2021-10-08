import { SortOrder } from '../prisma/sort-order.enum';

export class CommentMinOrderByAggregateInput {
    id?: SortOrder;

    createdAt?: SortOrder;

    updatedAt?: SortOrder;

    body?: SortOrder;

    authorId?: SortOrder;

    articleId?: SortOrder;
}
