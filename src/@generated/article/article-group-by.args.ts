import { ArticleWhereInput } from './article-where.input';
import { ArticleOrderByWithAggregationInput } from './article-order-by-with-aggregation.input';
import { ArticleScalarFieldEnum } from './article-scalar-field.enum';
import { ArticleScalarWhereWithAggregatesInput } from './article-scalar-where-with-aggregates.input';
import { ArticleCountAggregateInput } from './article-count-aggregate.input';
import { ArticleAvgAggregateInput } from './article-avg-aggregate.input';
import { ArticleSumAggregateInput } from './article-sum-aggregate.input';
import { ArticleMinAggregateInput } from './article-min-aggregate.input';
import { ArticleMaxAggregateInput } from './article-max-aggregate.input';

export class ArticleGroupByArgs {
    where?: ArticleWhereInput;

    orderBy?: Array<ArticleOrderByWithAggregationInput>;

    by!: Array<ArticleScalarFieldEnum>;

    having?: ArticleScalarWhereWithAggregatesInput;

    take?: number;

    skip?: number;

    _count?: ArticleCountAggregateInput;

    _avg?: ArticleAvgAggregateInput;

    _sum?: ArticleSumAggregateInput;

    _min?: ArticleMinAggregateInput;

    _max?: ArticleMaxAggregateInput;
}
