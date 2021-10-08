import { NestedEnumRoleNullableFilter } from './nested-enum-role-nullable-filter.input';
import { NestedEnumRoleNullableWithAggregatesFilter } from './nested-enum-role-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { Role } from './role.enum';

export class EnumRoleNullableWithAggregatesFilter {

    equals?: Role;

    in?: Array<Role>;

    notIn?: Array<Role>;

    not?: NestedEnumRoleNullableWithAggregatesFilter;

    _count?: NestedIntNullableFilter;

    _min?: NestedEnumRoleNullableFilter;

    _max?: NestedEnumRoleNullableFilter;
}
