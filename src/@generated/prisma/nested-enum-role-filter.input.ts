import { Role } from './role.enum';

export class NestedEnumRoleFilter {
    equals?: Role;

    in?: Array<Role>;

    notIn?: Array<Role>;

    not?: NestedEnumRoleFilter;
}
