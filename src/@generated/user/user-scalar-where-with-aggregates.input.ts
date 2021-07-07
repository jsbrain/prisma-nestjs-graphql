import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';
import { EnumRoleNullableWithAggregatesFilter } from '../prisma/enum-role-nullable-with-aggregates-filter.input';

export class UserScalarWhereWithAggregatesInput {

    AND?: Array<UserScalarWhereWithAggregatesInput>;

    OR?: Array<UserScalarWhereWithAggregatesInput>;

    NOT?: Array<UserScalarWhereWithAggregatesInput>;

    id?: StringWithAggregatesFilter;

    age?: IntWithAggregatesFilter;

    email?: StringWithAggregatesFilter;

    name?: StringWithAggregatesFilter;

    password?: StringWithAggregatesFilter;

    bio?: StringNullableWithAggregatesFilter;

    image?: StringNullableWithAggregatesFilter;

    countComments?: IntNullableWithAggregatesFilter;

    rating?: FloatNullableWithAggregatesFilter;

    role?: EnumRoleNullableWithAggregatesFilter;
}
