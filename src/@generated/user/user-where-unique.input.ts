import * as Validator from 'class-validator';

export class UserWhereUniqueInput {

    id?: string;

    email?: string;

    @Validator.MinLength(3) @Validator.MinLength(3)
    @Validator.MaxLength(50, {message: `Oh no 😱. It's too long!`})
    name?: string;
}
