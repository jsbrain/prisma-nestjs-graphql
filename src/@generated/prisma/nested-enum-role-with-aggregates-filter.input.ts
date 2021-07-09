import { Role } from './role.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumRoleFilter } from './nested-enum-role-filter.input';

export class NestedEnumRoleWithAggregatesFilter {
    equals?: Role;

    in?: Array<Role>;

    notIn?: Array<Role>;

    not?: NestedEnumRoleWithAggregatesFilter;

    _count?: NestedIntFilter;

    count?: NestedIntFilter;

    _min?: NestedEnumRoleFilter;

    min?: NestedEnumRoleFilter;

    _max?: NestedEnumRoleFilter;

    max?: NestedEnumRoleFilter;
}
