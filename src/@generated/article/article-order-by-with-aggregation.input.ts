import { SortOrder } from '../prisma/sort-order.enum';
import { ArticleAvgOrderByAggregateInput } from './article-avg-order-by-aggregate.input';
import { ArticleCountOrderByAggregateInput } from './article-count-order-by-aggregate.input';
import { ArticleMaxOrderByAggregateInput } from './article-max-order-by-aggregate.input';
import { ArticleMinOrderByAggregateInput } from './article-min-order-by-aggregate.input';
import { ArticleSumOrderByAggregateInput } from './article-sum-order-by-aggregate.input';

export class ArticleOrderByWithAggregationInput {
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

    _count?: ArticleCountOrderByAggregateInput;

    _avg?: ArticleAvgOrderByAggregateInput;

    _max?: ArticleMaxOrderByAggregateInput;

    _min?: ArticleMinOrderByAggregateInput;

    _sum?: ArticleSumOrderByAggregateInput;
}
