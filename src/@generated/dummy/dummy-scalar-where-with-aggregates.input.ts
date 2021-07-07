import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';
import { BytesNullableWithAggregatesFilter } from '../prisma/bytes-nullable-with-aggregates-filter.input';
import { DecimalNullableWithAggregatesFilter } from '../prisma/decimal-nullable-with-aggregates-filter.input';
import { BigIntNullableWithAggregatesFilter } from '../prisma/big-int-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

export class DummyScalarWhereWithAggregatesInput {

    AND?: Array<DummyScalarWhereWithAggregatesInput>;

    OR?: Array<DummyScalarWhereWithAggregatesInput>;

    NOT?: Array<DummyScalarWhereWithAggregatesInput>;

    id?: StringWithAggregatesFilter;

    created?: DateTimeWithAggregatesFilter;

    floaty?: FloatWithAggregatesFilter;

    int?: IntNullableWithAggregatesFilter;

    float?: FloatNullableWithAggregatesFilter;

    bytes?: BytesNullableWithAggregatesFilter;

    decimal?: DecimalNullableWithAggregatesFilter;

    bigInt?: BigIntNullableWithAggregatesFilter;

    json?: JsonNullableWithAggregatesFilter;

    friends?: StringNullableListFilter;
}
