import { TagWhereInput } from '../tag/tag-where.input';
import { TagOrderByWithRelationInput } from '../tag/tag-order-by-with-relation.input';
import { TagWhereUniqueInput } from '../tag/tag-where-unique.input';
import { TagCountAggregateInput } from '../tag/tag-count-aggregate.input';
import { TagMinAggregateInput } from '../tag/tag-min-aggregate.input';
import { TagMaxAggregateInput } from '../tag/tag-max-aggregate.input';

export class TagAggregateArgs {

    where?: TagWhereInput;

    orderBy?: Array<TagOrderByWithRelationInput>;

    cursor?: TagWhereUniqueInput;

    take?: number;

    skip?: number;

    _count?: TagCountAggregateInput;

    _min?: TagMinAggregateInput;

    _max?: TagMaxAggregateInput;
}
