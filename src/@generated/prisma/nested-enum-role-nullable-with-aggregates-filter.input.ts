import { Role } from './role.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumRoleNullableFilter } from './nested-enum-role-nullable-filter.input';

export class NestedEnumRoleNullableWithAggregatesFilter {

    equals?: Role;

    in?: Array<Role>;

    notIn?: Array<Role>;

    not?: NestedEnumRoleNullableWithAggregatesFilter;

    _count?: NestedIntNullableFilter;

    _min?: NestedEnumRoleNullableFilter;

    _max?: NestedEnumRoleNullableFilter;
}
