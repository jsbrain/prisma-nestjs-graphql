import * as Transformer from 'class-transformer';
import * as Validator from 'class-validator';
import { Role } from '../prisma/role.enum';
import { CommentUncheckedCreateNestedManyWithoutAuthorInput } from '../comment/comment-unchecked-create-nested-many-without-author.input';

export class UserUncheckedCreateWithoutArticlesInput {
    id?: string;

    @Transformer.Type(() => Number)
    age?: number;

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

    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput;
}
