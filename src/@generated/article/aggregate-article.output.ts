import { ArticleCountAggregate } from './article-count-aggregate.output';
import { ArticleAvgAggregate } from './article-avg-aggregate.output';
import { ArticleSumAggregate } from './article-sum-aggregate.output';
import { ArticleMinAggregate } from './article-min-aggregate.output';
import { ArticleMaxAggregate } from './article-max-aggregate.output';

export class AggregateArticle {

    _count?: ArticleCountAggregate;

    count?: ArticleCountAggregate;

    _avg?: ArticleAvgAggregate;

    avg?: ArticleAvgAggregate;

    _sum?: ArticleSumAggregate;

    sum?: ArticleSumAggregate;

    _min?: ArticleMinAggregate;

    min?: ArticleMinAggregate;

    _max?: ArticleMaxAggregate;

    max?: ArticleMaxAggregate;
}
