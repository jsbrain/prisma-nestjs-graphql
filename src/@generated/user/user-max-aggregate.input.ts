import { ApiExtraModels } from '@nestjs/swagger';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserMaxAggregateInput {
    /** The id of the user */
    id?: true;

    age?: true;

    /**
     * This is a js doc comment!
     * And we can continue the comment on the next line as well :)
     */
    email?: true;

    /** User's name */
    name?: true;

    password?: true;

    bio?: true;

    image?: true;

    countComments?: true;

    rating?: true;

    role?: true;
}
