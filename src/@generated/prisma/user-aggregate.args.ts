import { UserAvgAggregateInput } from '../user/user-avg-aggregate.input';
import { UserCountAggregateInput } from '../user/user-count-aggregate.input';
import { UserMaxAggregateInput } from '../user/user-max-aggregate.input';
import { UserMinAggregateInput } from '../user/user-min-aggregate.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { UserSumAggregateInput } from '../user/user-sum-aggregate.input';
import { UserWhereInput } from '../user/user-where.input';
import { UserWhereUniqueInput } from '../user/user-where-unique.input';

export class UserAggregateArgs {

    where?: UserWhereInput;

    orderBy?: Array<UserOrderByWithRelationInput>;

    cursor?: UserWhereUniqueInput;

    take?: number;

    skip?: number;

    _count?: UserCountAggregateInput;

    _avg?: UserAvgAggregateInput;

    _sum?: UserSumAggregateInput;

    _min?: UserMinAggregateInput;

    _max?: UserMaxAggregateInput;
}
