import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

export class ArticleScalarWhereInput {
    AND?: Array<ArticleScalarWhereInput>;

    OR?: Array<ArticleScalarWhereInput>;

    NOT?: Array<ArticleScalarWhereInput>;

    id?: StringFilter;

    slug?: StringFilter;

    title?: StringFilter;

    description?: StringFilter;

    body?: StringFilter;

    createdAt?: DateTimeFilter;

    updatedAt?: DateTimeFilter;

    favoritesCount?: IntFilter;

    authorId?: StringFilter;

    active?: BoolNullableFilter;
}
