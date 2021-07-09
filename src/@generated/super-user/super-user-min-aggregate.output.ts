import * as Transformer from 'class-transformer';
import * as Validator from 'class-validator';
import { Role } from '../prisma/role.enum';

export class SuperUserMinAggregate {
    @Transformer.Type(() => String)
    @Validator.IsString()
    id?: string;

    @Transformer.Type(() => String)
    @Validator.IsString()
    @Validator.IsEmail()
    email?: string;

    @Transformer.Exclude()
    @Transformer.Type(() => String)
    @Validator.IsString()
    password?: string;

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
    role?: Role;
}
