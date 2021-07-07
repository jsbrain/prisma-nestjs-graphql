import { ApiExtraModels } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { MinLength } from 'class-validator';
import { MaxLength } from 'class-validator';
import { Role } from '../prisma/role.enum';
import { ArticleUncheckedCreateNestedManyWithoutAuthorInput } from '../article/article-unchecked-create-nested-many-without-author.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserUncheckedCreateWithoutCommentsInput {
    /** The id of the user */
    id?: string;

    @Type(() => Number)
    age?: number;

    /**
     * This is a js doc comment!
     * And we can continue the comment on the next line as well :)
     */
    email!: string;

    /** User's name */
    @MinLength(3)
    @MinLength(3)
    @MaxLength(50, { message: `Oh no 😱. It's too long!` })
    name!: string;

    password!: string;

    bio?: string;

    image?: string;

    countComments?: number;

    rating?: number;

    role?: Role;

    articles?: ArticleUncheckedCreateNestedManyWithoutAuthorInput;
}
