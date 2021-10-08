import { ArticleListRelationFilter } from '../article/article-list-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

export class TagWhereInput {
    AND?: Array<TagWhereInput>;

    OR?: Array<TagWhereInput>;

    NOT?: Array<TagWhereInput>;

    id?: StringFilter;

    name?: StringFilter;

    articles?: ArticleListRelationFilter;
}
