import * as Transformer from 'class-transformer';
import * as Validator from 'class-validator';
import { Role } from '../prisma/role.enum';
import { SuperUserCountAggregate } from './super-user-count-aggregate.output';
import { SuperUserAvgAggregate } from './super-user-avg-aggregate.output';
import { SuperUserSumAggregate } from './super-user-sum-aggregate.output';
import { SuperUserMinAggregate } from './super-user-min-aggregate.output';
import { SuperUserMaxAggregate } from './super-user-max-aggregate.output';

export class SuperUserGroupBy {
    @Transformer.Type(() => String)
    @Validator.IsString()
    id!: string;

    @Transformer.Type(() => String)
    @Validator.IsString()
    @Validator.IsEmail()
    email!: string;

    @Transformer.Exclude()
    @Transformer.Type(() => String)
    @Validator.IsString()
    password!: string;

    @Transformer.Type(() => String)
    @Validator.IsAlphanumeric()
    @Validator.MinLength(4, { message: `Wow ... that's a short name!` })
    @Validator.MaxLength(32, { message: `Oh no 😱. It's too long!` })
    @Validator.IsOptional()
    name?: string;

    @Transformer.Type(() => Number)
    @Validator.IsInt()
    @Validator.IsPositive()
    @Validator.Min(3)
    @Validator.Max(99, { message: `Wait ... I think you're way to old 🤔` })
    @Validator.IsOptional()
    age?: number;

    @Transformer.Type(() => Number)
    @Validator.IsInt()
    @Validator.IsPositive()
    @Validator.IsOptional()
    numberString?: number;

    @Validator.IsEnum(Role)
    role!: Role;

    _count?: SuperUserCountAggregate;

    _avg?: SuperUserAvgAggregate;

    _sum?: SuperUserSumAggregate;

    _min?: SuperUserMinAggregate;

    _max?: SuperUserMaxAggregate;
}
