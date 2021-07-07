import { Role } from './role.enum';

export class NestedEnumRoleNullableFilter {

    equals?: Role;

    in?: Array<Role>;

    notIn?: Array<Role>;

    not?: NestedEnumRoleNullableFilter;
}
