import { StringFilter } from '../prisma/string-filter.input';
import { TagListRelationFilter } from '../tag/tag-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { UserWhereInput } from '../user/user-where.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';

export class ArticleWhereInput {

    AND?: Array<ArticleWhereInput>;

    OR?: Array<ArticleWhereInput>;

    NOT?: Array<ArticleWhereInput>;

    id?: StringFilter;

    slug?: StringFilter;

    title?: StringFilter;

    description?: StringFilter;

    body?: StringFilter;

    tags?: TagListRelationFilter;

    createdAt?: DateTimeFilter;

    updatedAt?: DateTimeFilter;

    favoritesCount?: IntFilter;

    author?: UserWhereInput;

    authorId?: StringFilter;

    favoritedBy?: UserListRelationFilter;

    comments?: CommentListRelationFilter;

    active?: BoolNullableFilter;
}
