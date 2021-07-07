import { SortOrder } from '../prisma/sort-order.enum';

export class UserMinOrderByAggregateInput {
    id?: SortOrder;

    age?: SortOrder;

    email?: SortOrder;

    name?: SortOrder;

    password?: SortOrder;

    bio?: SortOrder;

    image?: SortOrder;

    countComments?: SortOrder;

    rating?: SortOrder;

    role?: SortOrder;
}
