import { ArticleAvgAggregate } from './article-avg-aggregate.output';
import { ArticleCountAggregate } from './article-count-aggregate.output';
import { ArticleMaxAggregate } from './article-max-aggregate.output';
import { ArticleMinAggregate } from './article-min-aggregate.output';
import { ArticleSumAggregate } from './article-sum-aggregate.output';

export class AggregateArticle {
    _count?: ArticleCountAggregate;

    _avg?: ArticleAvgAggregate;

    _sum?: ArticleSumAggregate;

    _min?: ArticleMinAggregate;

    _max?: ArticleMaxAggregate;
}
