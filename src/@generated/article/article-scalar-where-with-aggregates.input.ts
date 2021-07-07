import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';

export class ArticleScalarWhereWithAggregatesInput {
    AND?: Array<ArticleScalarWhereWithAggregatesInput>;

    OR?: Array<ArticleScalarWhereWithAggregatesInput>;

    NOT?: Array<ArticleScalarWhereWithAggregatesInput>;

    id?: StringWithAggregatesFilter;

    slug?: StringWithAggregatesFilter;

    title?: StringWithAggregatesFilter;

    description?: StringWithAggregatesFilter;

    body?: StringWithAggregatesFilter;

    createdAt?: DateTimeWithAggregatesFilter;

    updatedAt?: DateTimeWithAggregatesFilter;

    favoritesCount?: IntWithAggregatesFilter;

    authorId?: StringWithAggregatesFilter;

    active?: BoolNullableWithAggregatesFilter;
}
