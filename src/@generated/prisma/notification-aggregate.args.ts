import { NotificationWhereInput } from '../notification/notification-where.input';
import { NotificationOrderByWithRelationInput } from '../notification/notification-order-by-with-relation.input';
import { NotificationWhereUniqueInput } from '../notification/notification-where-unique.input';
import { NotificationCountAggregateInput } from '../notification/notification-count-aggregate.input';
import { NotificationMinAggregateInput } from '../notification/notification-min-aggregate.input';
import { NotificationMaxAggregateInput } from '../notification/notification-max-aggregate.input';

export class NotificationAggregateArgs {
    where?: NotificationWhereInput;

    orderBy?: Array<NotificationOrderByWithRelationInput>;

    cursor?: NotificationWhereUniqueInput;

    take?: number;

    skip?: number;

    _count?: NotificationCountAggregateInput;

    _min?: NotificationMinAggregateInput;

    _max?: NotificationMaxAggregateInput;
}
