import { ArticleWhereInput } from './article-where.input';
import { ArticleOrderByWithRelationInput } from './article-order-by-with-relation.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleScalarFieldEnum } from './article-scalar-field.enum';

export class FindManyArticleArgs {
    where?: ArticleWhereInput;

    orderBy?: Array<ArticleOrderByWithRelationInput>;

    cursor?: ArticleWhereUniqueInput;

    take?: number;

    skip?: number;

    distinct?: Array<ArticleScalarFieldEnum>;
}
