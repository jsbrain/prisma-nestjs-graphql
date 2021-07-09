import { SuperUserWhereInput } from '../super-user/super-user-where.input';
import { SuperUserOrderByWithRelationInput } from '../super-user/super-user-order-by-with-relation.input';
import { SuperUserWhereUniqueInput } from '../super-user/super-user-where-unique.input';
import { SuperUserCountAggregateInput } from '../super-user/super-user-count-aggregate.input';
import { SuperUserAvgAggregateInput } from '../super-user/super-user-avg-aggregate.input';
import { SuperUserSumAggregateInput } from '../super-user/super-user-sum-aggregate.input';
import { SuperUserMinAggregateInput } from '../super-user/super-user-min-aggregate.input';
import { SuperUserMaxAggregateInput } from '../super-user/super-user-max-aggregate.input';

export class SuperUserAggregateArgs {
    where?: SuperUserWhereInput;

    orderBy?: Array<SuperUserOrderByWithRelationInput>;

    cursor?: SuperUserWhereUniqueInput;

    take?: number;

    skip?: number;

    _count?: SuperUserCountAggregateInput;

    _avg?: SuperUserAvgAggregateInput;

    _sum?: SuperUserSumAggregateInput;

    _min?: SuperUserMinAggregateInput;

    _max?: SuperUserMaxAggregateInput;
}
