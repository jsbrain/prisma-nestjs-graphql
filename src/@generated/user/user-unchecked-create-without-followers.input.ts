import * as Transformer from 'class-transformer';
import * as Validator from 'class-validator';
import { Role } from '../prisma/role.enum';
import { ArticleUncheckedCreateNestedManyWithoutAuthorInput } from '../article/article-unchecked-create-nested-many-without-author.input';
import { CommentUncheckedCreateNestedManyWithoutAuthorInput } from '../comment/comment-unchecked-create-nested-many-without-author.input';

export class UserUncheckedCreateWithoutFollowersInput {
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

    articles?: ArticleUncheckedCreateNestedManyWithoutAuthorInput;

    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput;
}
