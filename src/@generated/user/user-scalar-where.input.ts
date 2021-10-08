import { ApiExtraModels } from '@nestjs/swagger';

import { EnumRoleNullableFilter } from '../prisma/enum-role-nullable-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserScalarWhereInput {
    AND?: Array<UserScalarWhereInput>;

    OR?: Array<UserScalarWhereInput>;

    NOT?: Array<UserScalarWhereInput>;

    /** The id of the user */
    id?: StringFilter;

    age?: IntFilter;

    /**
     * This is a js doc comment!
     * And we can continue the comment on the next line as well :)
     */
    email?: StringFilter;

    /** User's name */
    name?: StringFilter;

    password?: StringFilter;

    bio?: StringNullableFilter;

    image?: StringNullableFilter;

    countComments?: IntNullableFilter;

    rating?: FloatNullableFilter;

    role?: EnumRoleNullableFilter;
}
