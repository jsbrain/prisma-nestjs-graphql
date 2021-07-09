import * as Transformer from 'class-transformer';
import * as Validator from 'class-validator';

export class SuperUserSumAggregate {
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
}
