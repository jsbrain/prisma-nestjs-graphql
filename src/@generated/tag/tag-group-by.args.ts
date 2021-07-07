import { TagWhereInput } from './tag-where.input';
import { TagOrderByWithAggregationInput } from './tag-order-by-with-aggregation.input';
import { TagScalarFieldEnum } from './tag-scalar-field.enum';
import { TagScalarWhereWithAggregatesInput } from './tag-scalar-where-with-aggregates.input';
import { TagCountAggregateInput } from './tag-count-aggregate.input';
import { TagMinAggregateInput } from './tag-min-aggregate.input';
import { TagMaxAggregateInput } from './tag-max-aggregate.input';

export class TagGroupByArgs {
    where?: TagWhereInput;

    orderBy?: Array<TagOrderByWithAggregationInput>;

    by!: Array<TagScalarFieldEnum>;

    having?: TagScalarWhereWithAggregatesInput;

    take?: number;

    skip?: number;

    _count?: TagCountAggregateInput;

    _min?: TagMinAggregateInput;

    _max?: TagMaxAggregateInput;
}
