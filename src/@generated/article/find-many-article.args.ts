import { ArticleOrderByWithRelationInput } from './article-order-by-with-relation.input';
import { ArticleScalarFieldEnum } from './article-scalar-field.enum';
import { ArticleWhereInput } from './article-where.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

export class FindManyArticleArgs {
    where?: ArticleWhereInput;

    orderBy?: Array<ArticleOrderByWithRelationInput>;

    cursor?: ArticleWhereUniqueInput;

    take?: number;

    skip?: number;

    distinct?: Array<ArticleScalarFieldEnum>;
}
