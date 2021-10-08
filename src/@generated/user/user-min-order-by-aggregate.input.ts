import { ApiExtraModels } from '@nestjs/swagger';

import { SortOrder } from '../prisma/sort-order.enum';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserMinOrderByAggregateInput {
    /** The id of the user */
    id?: SortOrder;

    age?: SortOrder;

    /**
     * This is a js doc comment!
     * And we can continue the comment on the next line as well :)
     */
    email?: SortOrder;

    /** User's name */
    name?: SortOrder;

    password?: SortOrder;

    bio?: SortOrder;

    image?: SortOrder;

    countComments?: SortOrder;

    rating?: SortOrder;

    role?: SortOrder;
}
