import { JsonObject } from 'type-fest';

export class NestedJsonNullableFilter {
    equals?: any;

    lt?: any;

    lte?: any;

    gt?: any;

    gte?: any;

    path?: Array<string>;

    string_contains?: string;

    string_starts_with?: string;

    string_ends_with?: string;

    array_contains?: any;

    array_starts_with?: any;

    array_ends_with?: any;

    not?: any;
}
