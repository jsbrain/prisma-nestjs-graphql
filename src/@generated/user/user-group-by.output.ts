import { Type } from 'class-transformer';
import { MaxLength,MinLength  } from 'class-validator';

import { Role } from '../prisma/role.enum';
import { UserAvgAggregate } from './user-avg-aggregate.output';
import { UserCountAggregate } from './user-count-aggregate.output';
import { UserMaxAggregate } from './user-max-aggregate.output';
import { UserMinAggregate } from './user-min-aggregate.output';
import { UserSumAggregate } from './user-sum-aggregate.output';

export class UserGroupBy {

    /** The id of the user */
    id!: string;

    @Type(()=>Number)
    age!: number;

    /**
     * This is a js doc comment!
     * And we can continue the comment on the next line as well :)
     */
    email!: string;

    /** User's name */
    @MinLength(3)
    @MinLength(3)
    @MaxLength(50, {message: `Oh no 😱. It's too long!`})
    name!: string;

    password!: string;

    bio?: string;

    image?: string;

    countComments?: number;

    rating?: number;

    role?: Role;

    _count?: UserCountAggregate;

    _avg?: UserAvgAggregate;

    _sum?: UserSumAggregate;

    _min?: UserMinAggregate;

    _max?: UserMaxAggregate;
}
