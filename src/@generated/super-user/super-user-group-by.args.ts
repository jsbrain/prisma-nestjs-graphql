import { SuperUserWhereInput } from './super-user-where.input';
import { SuperUserOrderByWithAggregationInput } from './super-user-order-by-with-aggregation.input';
import { SuperUserScalarFieldEnum } from './super-user-scalar-field.enum';
import { SuperUserScalarWhereWithAggregatesInput } from './super-user-scalar-where-with-aggregates.input';
import { SuperUserCountAggregateInput } from './super-user-count-aggregate.input';
import { SuperUserAvgAggregateInput } from './super-user-avg-aggregate.input';
import { SuperUserSumAggregateInput } from './super-user-sum-aggregate.input';
import { SuperUserMinAggregateInput } from './super-user-min-aggregate.input';
import { SuperUserMaxAggregateInput } from './super-user-max-aggregate.input';

/**
 * NOTE: We currently do not need, neither support user.
 * This user model is soely for demonstration and testing purposes.
 * @default - false
 */
export class SuperUserGroupByArgs {
    where?: SuperUserWhereInput;

    orderBy?: Array<SuperUserOrderByWithAggregationInput>;

    by!: Array<SuperUserScalarFieldEnum>;

    having?: SuperUserScalarWhereWithAggregatesInput;

    take?: number;

    skip?: number;

    _count?: SuperUserCountAggregateInput;

    _avg?: SuperUserAvgAggregateInput;

    _sum?: SuperUserSumAggregateInput;

    _min?: SuperUserMinAggregateInput;

    _max?: SuperUserMaxAggregateInput;
}
