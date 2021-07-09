import * as Transformer from 'class-transformer';

export class UserCountAggregate {
    id!: number;

    @Transformer.Type(() => Number)
    age!: number;

    email!: number;

    name!: number;

    password!: number;

    bio!: number;

    image!: number;

    countComments!: number;

    rating!: number;

    role!: number;

    _all!: number;
}
