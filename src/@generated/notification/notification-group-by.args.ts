import { NotificationWhereInput } from './notification-where.input';
import { NotificationOrderByWithAggregationInput } from './notification-order-by-with-aggregation.input';
import { NotificationScalarFieldEnum } from './notification-scalar-field.enum';
import { NotificationScalarWhereWithAggregatesInput } from './notification-scalar-where-with-aggregates.input';
import { NotificationCountAggregateInput } from './notification-count-aggregate.input';
import { NotificationMinAggregateInput } from './notification-min-aggregate.input';
import { NotificationMaxAggregateInput } from './notification-max-aggregate.input';

/**
 * Notification model to display relevant notifications.
 * Generally works for various models. Includes utility methods.
 * ```ts
 * const note = new Notification({...})
 * if (timeout && !note.seen) {
 * // Notification has not been seen in x days, repin it
 * note.repin()
 * }
 * ```
 */
export class NotificationGroupByArgs {
    where?: NotificationWhereInput;

    orderBy?: Array<NotificationOrderByWithAggregationInput>;

    by!: Array<NotificationScalarFieldEnum>;

    having?: NotificationScalarWhereWithAggregatesInput;

    take?: number;

    skip?: number;

    _count?: NotificationCountAggregateInput;

    _min?: NotificationMinAggregateInput;

    _max?: NotificationMaxAggregateInput;
}
