import { TagCountAggregate } from './tag-count-aggregate.output';
import { TagMinAggregate } from './tag-min-aggregate.output';
import { TagMaxAggregate } from './tag-max-aggregate.output';

export class AggregateTag {
    _count?: TagCountAggregate;

    count?: TagCountAggregate;

    _min?: TagMinAggregate;

    min?: TagMinAggregate;

    _max?: TagMaxAggregate;

    max?: TagMaxAggregate;
}
