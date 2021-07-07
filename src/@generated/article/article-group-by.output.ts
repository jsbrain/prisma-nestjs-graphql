import { ArticleCountAggregate } from './article-count-aggregate.output';
import { ArticleAvgAggregate } from './article-avg-aggregate.output';
import { ArticleSumAggregate } from './article-sum-aggregate.output';
import { ArticleMinAggregate } from './article-min-aggregate.output';
import { ArticleMaxAggregate } from './article-max-aggregate.output';

export class ArticleGroupBy {
    id!: string;

    slug!: string;

    title!: string;

    description!: string;

    body!: string;

    createdAt!: Date | string;

    updatedAt!: Date | string;

    favoritesCount!: number;

    authorId!: string;

    active?: boolean;

    _count?: ArticleCountAggregate;

    _avg?: ArticleAvgAggregate;

    _sum?: ArticleSumAggregate;

    _min?: ArticleMinAggregate;

    _max?: ArticleMaxAggregate;
}
