import { ArticleWhereInput } from '../article/article-where.input';
import { ArticleOrderByWithRelationInput } from '../article/article-order-by-with-relation.input';
import { ArticleWhereUniqueInput } from '../article/article-where-unique.input';
import { ArticleCountAggregateInput } from '../article/article-count-aggregate.input';
import { ArticleAvgAggregateInput } from '../article/article-avg-aggregate.input';
import { ArticleSumAggregateInput } from '../article/article-sum-aggregate.input';
import { ArticleMinAggregateInput } from '../article/article-min-aggregate.input';
import { ArticleMaxAggregateInput } from '../article/article-max-aggregate.input';

export class ArticleAggregateArgs {
    where?: ArticleWhereInput;

    orderBy?: Array<ArticleOrderByWithRelationInput>;

    cursor?: ArticleWhereUniqueInput;

    take?: number;

    skip?: number;

    _count?: ArticleCountAggregateInput;

    _avg?: ArticleAvgAggregateInput;

    _sum?: ArticleSumAggregateInput;

    _min?: ArticleMinAggregateInput;

    _max?: ArticleMaxAggregateInput;
}
