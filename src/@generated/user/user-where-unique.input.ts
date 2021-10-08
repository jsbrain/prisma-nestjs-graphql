import { ApiExtraModels } from '@nestjs/swagger';
import { MaxLength, MinLength } from 'class-validator';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserWhereUniqueInput {
    /** The id of the user */
    id?: string;

    /**
     * This is a js doc comment!
     * And we can continue the comment on the next line as well :)
     */
    email?: string;

    /** User's name */
    @MinLength(3)
    @MinLength(3)
    @MaxLength(50, { message: `Oh no 😱. It's too long!` })
    name?: string;
}
