import { Role } from './role.enum';
import { NestedEnumRoleNullableFilter } from './nested-enum-role-nullable-filter.input';

export class EnumRoleNullableFilter {

    equals?: Role;

    in?: Array<Role>;

    notIn?: Array<Role>;

    not?: NestedEnumRoleNullableFilter;
}
