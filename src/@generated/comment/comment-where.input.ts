import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserWhereInput } from '../user/user-where.input';
import { ArticleWhereInput } from '../article/article-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

export class CommentWhereInput {

    AND?: Array<CommentWhereInput>;

    OR?: Array<CommentWhereInput>;

    NOT?: Array<CommentWhereInput>;

    id?: StringFilter;

    createdAt?: DateTimeFilter;

    updatedAt?: DateTimeFilter;

    body?: StringFilter;

    author?: UserWhereInput;

    authorId?: StringFilter;

    article?: ArticleWhereInput;

    articleId?: StringNullableFilter;
}
