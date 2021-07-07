import { ApiExtraModels } from '@nestjs/swagger';
import { UserWhereInput } from './user-where.input';
import { UserOrderByWithAggregationInput } from './user-order-by-with-aggregation.input';
import { UserScalarFieldEnum } from './user-scalar-field.enum';
import { UserScalarWhereWithAggregatesInput } from './user-scalar-where-with-aggregates.input';
import { UserCountAggregateInput } from './user-count-aggregate.input';
import { UserAvgAggregateInput } from './user-avg-aggregate.input';
import { UserSumAggregateInput } from './user-sum-aggregate.input';
import { UserMinAggregateInput } from './user-min-aggregate.input';
import { UserMaxAggregateInput } from './user-max-aggregate.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserGroupByArgs {
    where?: UserWhereInput;

    orderBy?: Array<UserOrderByWithAggregationInput>;

    by!: Array<UserScalarFieldEnum>;

    having?: UserScalarWhereWithAggregatesInput;

    take?: number;

    skip?: number;

    _count?: UserCountAggregateInput;

    _avg?: UserAvgAggregateInput;

    _sum?: UserSumAggregateInput;

    _min?: UserMinAggregateInput;

    _max?: UserMaxAggregateInput;
}
