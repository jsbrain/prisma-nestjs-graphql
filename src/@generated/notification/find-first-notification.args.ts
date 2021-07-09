import { NotificationWhereInput } from './notification-where.input';
import { NotificationOrderByWithRelationInput } from './notification-order-by-with-relation.input';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { NotificationScalarFieldEnum } from './notification-scalar-field.enum';

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
export class FindFirstNotificationArgs {
    where?: NotificationWhereInput;

    orderBy?: Array<NotificationOrderByWithRelationInput>;

    cursor?: NotificationWhereUniqueInput;

    take?: number;

    skip?: number;

    distinct?: Array<NotificationScalarFieldEnum>;
}
