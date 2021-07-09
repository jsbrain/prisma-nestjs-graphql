import * as Transformer from 'class-transformer';

export class UserSumAggregate {
    @Transformer.Type(() => Number)
    age?: number;

    countComments?: number;

    rating?: number;
}
