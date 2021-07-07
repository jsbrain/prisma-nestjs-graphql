import * as Transformer from 'class-transformer';
import * as Validator from 'class-validator';
import { Role } from '../prisma/role.enum';
import { UserCreateNestedManyWithoutFollowersInput } from './user-create-nested-many-without-followers.input';
import { ArticleCreateNestedManyWithoutFavoritedByInput } from '../article/article-create-nested-many-without-favorited-by.input';
import { ArticleCreateNestedManyWithoutAuthorInput } from '../article/article-create-nested-many-without-author.input';
import { CommentCreateNestedManyWithoutAuthorInput } from '../comment/comment-create-nested-many-without-author.input';

export class UserCreateWithoutFollowersInput {

    id?: string;

    @Transformer.Type(()=>Number)
    age?: number;

    email!: string;

    @Validator.MinLength(3) @Validator.MinLength(3)
    @Validator.MaxLength(50, {message: `Oh no 😱. It's too long!`})
    name!: string;

    password!: string;

    bio?: string;

    image?: string;

    countComments?: number;

    rating?: number;

    role?: Role;

    following?: UserCreateNestedManyWithoutFollowersInput;

    favoriteArticles?: ArticleCreateNestedManyWithoutFavoritedByInput;

    articles?: ArticleCreateNestedManyWithoutAuthorInput;

    comments?: CommentCreateNestedManyWithoutAuthorInput;
}
