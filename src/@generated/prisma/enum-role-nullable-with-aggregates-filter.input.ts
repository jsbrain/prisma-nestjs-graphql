import { Role } from './role.enum';
import { NestedEnumRoleNullableWithAggregatesFilter } from './nested-enum-role-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumRoleNullableFilter } from './nested-enum-role-nullable-filter.input';

export class EnumRoleNullableWithAggregatesFilter {

    equals?: Role;

    in?: Array<Role>;

    notIn?: Array<Role>;

    not?: NestedEnumRoleNullableWithAggregatesFilter;

    _count?: NestedIntNullableFilter;

    count?: NestedIntNullableFilter;

    _min?: NestedEnumRoleNullableFilter;

    min?: NestedEnumRoleNullableFilter;

    _max?: NestedEnumRoleNullableFilter;

    max?: NestedEnumRoleNullableFilter;
}
