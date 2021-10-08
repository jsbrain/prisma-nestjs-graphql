import { BigIntNullableFilter } from '../prisma/big-int-nullable-filter.input';
import { BytesNullableFilter } from '../prisma/bytes-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

export class DummyWhereInput {
    AND?: Array<DummyWhereInput>;

    OR?: Array<DummyWhereInput>;

    NOT?: Array<DummyWhereInput>;

    id?: StringFilter;

    created?: DateTimeFilter;

    floaty?: FloatFilter;

    int?: IntNullableFilter;

    float?: FloatNullableFilter;

    bytes?: BytesNullableFilter;

    decimal?: DecimalNullableFilter;

    bigInt?: BigIntNullableFilter;

    json?: JsonNullableFilter;

    friends?: StringNullableListFilter;
}
