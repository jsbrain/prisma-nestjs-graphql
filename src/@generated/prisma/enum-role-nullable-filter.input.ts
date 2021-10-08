import { NestedEnumRoleNullableFilter } from './nested-enum-role-nullable-filter.input';
import { Role } from './role.enum';

export class EnumRoleNullableFilter {
    equals?: Role;

    in?: Array<Role>;

    notIn?: Array<Role>;

    not?: NestedEnumRoleNullableFilter;
}
