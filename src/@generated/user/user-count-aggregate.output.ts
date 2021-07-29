import { Type } from 'class-transformer';

export class UserCountAggregate {

    /** The id of the user */
    id!: number;

    @Type(()=>Number)
    age!: number;

    /**
     * This is a js doc comment!
     * And we can continue the comment on the next line as well :)
     */
    email!: number;

    /** User's name */
    name!: number;

    password!: number;

    bio!: number;

    image!: number;

    countComments!: number;

    rating!: number;

    role!: number;

    _all!: number;
}
