import { SortOrder } from '../prisma/sort-order.enum';
import { ArticleOrderByRelationAggregateInput } from '../article/article-order-by-relation-aggregate.input';

export class TagOrderByWithRelationInput {

    id?: SortOrder;

    name?: SortOrder;

    articles?: ArticleOrderByRelationAggregateInput;
}
