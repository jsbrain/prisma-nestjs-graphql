import * as Transformer from 'class-transformer';
import * as Validator from 'class-validator';
import { Role } from '../prisma/role.enum';
import { UserCountAggregate } from './user-count-aggregate.output';
import { UserAvgAggregate } from './user-avg-aggregate.output';
import { UserSumAggregate } from './user-sum-aggregate.output';
import { UserMinAggregate } from './user-min-aggregate.output';
import { UserMaxAggregate } from './user-max-aggregate.output';

export class UserGroupBy {
    id!: string;

    @Transformer.Type(() => Number)
    age!: number;

    email!: string;

    @Validator.MinLength(3)
    @Validator.MinLength(3)
    @Validator.MaxLength(50, { message: `Oh no 😱. It's too long!` })
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
