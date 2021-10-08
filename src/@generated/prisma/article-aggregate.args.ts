import { ArticleAvgAggregateInput } from '../article/article-avg-aggregate.input';
import { ArticleCountAggregateInput } from '../article/article-count-aggregate.input';
import { ArticleMaxAggregateInput } from '../article/article-max-aggregate.input';
import { ArticleMinAggregateInput } from '../article/article-min-aggregate.input';
import { ArticleOrderByWithRelationInput } from '../article/article-order-by-with-relation.input';
import { ArticleSumAggregateInput } from '../article/article-sum-aggregate.input';
import { ArticleWhereInput } from '../article/article-where.input';
import { ArticleWhereUniqueInput } from '../article/article-where-unique.input';

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
