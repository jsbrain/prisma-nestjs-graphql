import { SortOrder } from '../prisma/sort-order.enum';

export class ArticleMaxOrderByAggregateInput {

    id?: SortOrder;

    slug?: SortOrder;

    title?: SortOrder;

    description?: SortOrder;

    body?: SortOrder;

    createdAt?: SortOrder;

    updatedAt?: SortOrder;

    favoritesCount?: SortOrder;

    authorId?: SortOrder;

    active?: SortOrder;
}
