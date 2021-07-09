import { Role } from './role.enum';
import { NestedEnumRoleWithAggregatesFilter } from './nested-enum-role-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumRoleFilter } from './nested-enum-role-filter.input';

export class EnumRoleWithAggregatesFilter {
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
