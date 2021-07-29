import { ApiExtraModels } from '@nestjs/swagger';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';
import { EnumRoleNullableWithAggregatesFilter } from '../prisma/enum-role-nullable-with-aggregates-filter.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserScalarWhereWithAggregatesInput {

    AND?: Array<UserScalarWhereWithAggregatesInput>;

    OR?: Array<UserScalarWhereWithAggregatesInput>;

    NOT?: Array<UserScalarWhereWithAggregatesInput>;

    /** The id of the user */
    id?: StringWithAggregatesFilter;

    age?: IntWithAggregatesFilter;

    /**
     * This is a js doc comment!
     * And we can continue the comment on the next line as well :)
     */
    email?: StringWithAggregatesFilter;

    /** User's name */
    name?: StringWithAggregatesFilter;

    password?: StringWithAggregatesFilter;

    bio?: StringNullableWithAggregatesFilter;

    image?: StringNullableWithAggregatesFilter;

    countComments?: IntNullableWithAggregatesFilter;

    rating?: FloatNullableWithAggregatesFilter;

    role?: EnumRoleNullableWithAggregatesFilter;
}
