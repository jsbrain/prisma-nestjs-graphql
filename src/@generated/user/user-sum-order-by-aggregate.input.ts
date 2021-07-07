import { SortOrder } from '../prisma/sort-order.enum';

export class UserSumOrderByAggregateInput {
    age?: SortOrder;

    countComments?: SortOrder;

    rating?: SortOrder;
}
