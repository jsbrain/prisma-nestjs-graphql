import { ApiExtraModels } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { MaxLength,MinLength  } from 'class-validator';

import { Article } from '../article/article.model';
import { Comment } from '../comment/comment.model';
import { Role } from '../prisma/role.enum';
import { UserCount } from './user-count.output';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class User {

    /** The id of the user */
    id!: string;

    @Type(()=>Number)
    age!: number;

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

    bio!: string | null;

    image!: string | null;

    following!: Array<User>;

    followers!: Array<User>;

    favoriteArticles!: Array<Article>;

    articles!: Array<Article>;

    comments!: Array<Comment>;

    countComments!: number | null;

    rating!: number | null;

    role!: Role | null;

    _count!: UserCount;
}
