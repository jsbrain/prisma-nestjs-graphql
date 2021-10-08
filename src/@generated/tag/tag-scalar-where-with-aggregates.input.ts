import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

export class TagScalarWhereWithAggregatesInput {
    AND?: Array<TagScalarWhereWithAggregatesInput>;

    OR?: Array<TagScalarWhereWithAggregatesInput>;

    NOT?: Array<TagScalarWhereWithAggregatesInput>;

    id?: StringWithAggregatesFilter;

    name?: StringWithAggregatesFilter;
}
