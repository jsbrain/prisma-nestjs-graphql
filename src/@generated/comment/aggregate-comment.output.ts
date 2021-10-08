import { CommentCountAggregate } from './comment-count-aggregate.output';
import { CommentMinAggregate } from './comment-min-aggregate.output';
import { CommentMaxAggregate } from './comment-max-aggregate.output';

export class AggregateComment {

    _count?: CommentCountAggregate;

    _min?: CommentMinAggregate;

    _max?: CommentMaxAggregate;
}
