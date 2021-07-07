import { SortOrder } from '../prisma/sort-order.enum';

export class ArticleMinOrderByAggregateInput {

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
