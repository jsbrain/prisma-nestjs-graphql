import { Type } from 'class-transformer';

export class UserSumAggregate {

    @Type(()=>Number)
    age?: number;

    countComments?: number;

    rating?: number;
}
