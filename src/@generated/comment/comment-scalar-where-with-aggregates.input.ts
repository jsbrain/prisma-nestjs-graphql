import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

export class CommentScalarWhereWithAggregatesInput {
    AND?: Array<CommentScalarWhereWithAggregatesInput>;

    OR?: Array<CommentScalarWhereWithAggregatesInput>;

    NOT?: Array<CommentScalarWhereWithAggregatesInput>;

    id?: StringWithAggregatesFilter;

    createdAt?: DateTimeWithAggregatesFilter;

    updatedAt?: DateTimeWithAggregatesFilter;

    body?: StringWithAggregatesFilter;

    authorId?: StringWithAggregatesFilter;

    articleId?: StringNullableWithAggregatesFilter;
}
