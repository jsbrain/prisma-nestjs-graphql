import { ArticleOrderByRelationAggregateInput } from '../article/article-order-by-relation-aggregate.input';
import { SortOrder } from '../prisma/sort-order.enum';

export class TagOrderByWithRelationInput {
    id?: SortOrder;

    name?: SortOrder;

    articles?: ArticleOrderByRelationAggregateInput;
}
