import { TagCountAggregate } from './tag-count-aggregate.output';
import { TagMaxAggregate } from './tag-max-aggregate.output';
import { TagMinAggregate } from './tag-min-aggregate.output';

export class TagGroupBy {
    id!: string;

    name!: string;

    _count?: TagCountAggregate;

    _min?: TagMinAggregate;

    _max?: TagMaxAggregate;
}
