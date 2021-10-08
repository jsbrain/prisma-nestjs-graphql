import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

export class CommentScalarWhereInput {
    AND?: Array<CommentScalarWhereInput>;

    OR?: Array<CommentScalarWhereInput>;

    NOT?: Array<CommentScalarWhereInput>;

    id?: StringFilter;

    createdAt?: DateTimeFilter;

    updatedAt?: DateTimeFilter;

    body?: StringFilter;

    authorId?: StringFilter;

    articleId?: StringNullableFilter;
}
