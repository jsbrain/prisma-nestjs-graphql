import { ApiExtraModels } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { MaxLength,MinLength  } from 'class-validator';

import { ArticleCreateNestedManyWithoutFavoritedByInput } from '../article/article-create-nested-many-without-favorited-by.input';
import { CommentCreateNestedManyWithoutAuthorInput } from '../comment/comment-create-nested-many-without-author.input';
import { Role } from '../prisma/role.enum';
import { UserCreateNestedManyWithoutFollowersInput } from './user-create-nested-many-without-followers.input';
import { UserCreateNestedManyWithoutFollowingInput } from './user-create-nested-many-without-following.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserCreateWithoutArticlesInput {

    /** The id of the user */
    id?: string;

    @Type(()=>Number)
    age?: number;

    /**
     * This is a js doc comment!
     * And we can continue the comment on the next line as well :)
     */
    email!: string;

    /** User's name */
    @MinLength(3)
    @MinLength(3)
    @MaxLength(50, {message: `Oh no 😱. It's too long!`})
    name!: string;

    password!: string;

    bio?: string;

    image?: string;

    countComments?: number;

    rating?: number;

    role?: Role;

    following?: UserCreateNestedManyWithoutFollowersInput;

    followers?: UserCreateNestedManyWithoutFollowingInput;

    favoriteArticles?: ArticleCreateNestedManyWithoutFavoritedByInput;

    comments?: CommentCreateNestedManyWithoutAuthorInput;
}
