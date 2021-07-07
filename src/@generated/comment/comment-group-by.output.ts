import { CommentCountAggregate } from './comment-count-aggregate.output';
import { CommentMinAggregate } from './comment-min-aggregate.output';
import { CommentMaxAggregate } from './comment-max-aggregate.output';

export class CommentGroupBy {
    id!: string;

    createdAt!: Date | string;

    updatedAt!: Date | string;

    body!: string;

    authorId!: string;

    articleId?: string;

    _count?: CommentCountAggregate;

    _min?: CommentMinAggregate;

    _max?: CommentMaxAggregate;
}
