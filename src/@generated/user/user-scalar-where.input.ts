import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { EnumRoleNullableFilter } from '../prisma/enum-role-nullable-filter.input';

export class UserScalarWhereInput {
    AND?: Array<UserScalarWhereInput>;

    OR?: Array<UserScalarWhereInput>;

    NOT?: Array<UserScalarWhereInput>;

    id?: StringFilter;

    age?: IntFilter;

    email?: StringFilter;

    name?: StringFilter;

    password?: StringFilter;

    bio?: StringNullableFilter;

    image?: StringNullableFilter;

    countComments?: IntNullableFilter;

    rating?: FloatNullableFilter;

    role?: EnumRoleNullableFilter;
}
