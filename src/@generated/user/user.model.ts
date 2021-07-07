import * as Swagger from '@nestjs/swagger';
import * as Transformer from 'class-transformer';
import * as Validator from 'class-validator';
import { Article } from '../article/article.model';
import { Comment } from '../comment/comment.model';
import { Role } from '../prisma/role.enum';
import { UserCount } from './user-count.output';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@Swagger.ApiExtraModels()
export class User {

    /** The id of the user */
    id!: string;

    @Transformer.Type(()=>Number)
    age!: number;

    /** This is a js doc comment! //
    And we can continue the comment on the next line as well :) */
    email!: string;

    /** User's name */
    @Validator.MinLength(3) @Validator.MinLength(3)
    @Validator.MaxLength(50, {message: `Oh no 😱. It's too long!`})
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
