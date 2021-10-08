import { NestedStringFilter } from './nested-string-filter.input';
import { QueryMode } from './query-mode.enum';

export class StringFilter {

    equals?: string;

    in?: Array<string>;

    notIn?: Array<string>;

    lt?: string;

    lte?: string;

    gt?: string;

    gte?: string;

    contains?: string;

    startsWith?: string;

    endsWith?: string;

    mode?: QueryMode;

    not?: NestedStringFilter;
}
