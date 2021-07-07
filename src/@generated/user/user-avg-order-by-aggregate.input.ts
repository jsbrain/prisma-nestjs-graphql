import { SortOrder } from '../prisma/sort-order.enum';

export class UserAvgOrderByAggregateInput {
    age?: SortOrder;

    countComments?: SortOrder;

    rating?: SortOrder;
}
