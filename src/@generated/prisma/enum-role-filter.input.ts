import { Role } from './role.enum';
import { NestedEnumRoleFilter } from './nested-enum-role-filter.input';

export class EnumRoleFilter {
    equals?: Role;

    in?: Array<Role>;

    notIn?: Array<Role>;

    not?: NestedEnumRoleFilter;
}
