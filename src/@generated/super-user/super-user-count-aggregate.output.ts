import * as Transformer from 'class-transformer';
import * as Validator from 'class-validator';

export class SuperUserCountAggregate {
    id!: number;

    email!: number;

    password!: number;

    name!: number;

    @Transformer.Type(() => Number)
    @Validator.IsInt()
    @Validator.IsPositive()
    @Validator.Min(3)
    @Validator.Max(99, { message: `Wait ... I think you're way to old 🤔` })
    @Validator.IsOptional()
    age!: number;

    @Transformer.Type(() => Number)
    @Validator.IsInt()
    @Validator.IsPositive()
    @Validator.IsOptional()
    numberString!: number;

    role!: number;

    _all!: number;
}
