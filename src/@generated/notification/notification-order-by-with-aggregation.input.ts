import { SortOrder } from '../prisma/sort-order.enum';
import { NotificationCountOrderByAggregateInput } from './notification-count-order-by-aggregate.input';
import { NotificationMaxOrderByAggregateInput } from './notification-max-order-by-aggregate.input';
import { NotificationMinOrderByAggregateInput } from './notification-min-order-by-aggregate.input';

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
export class NotificationOrderByWithAggregationInput {
    id?: SortOrder;

    /**
     * Timestamp when note has been seen/recognized 📝.
     * Input can be Date or valid date string but will always be transformed to Date.
     */
    seen?: SortOrder;

    /** Notification title. @example Your report is ready 🥳 */
    title?: SortOrder;

    text?: SortOrder;

    /** Additional metadata that should be included to the note, like 'from UserXY' etc. */
    meta?: SortOrder;

    /** Additional data being sent with the note. Limited to */
    data?: SortOrder;

    _count?: NotificationCountOrderByAggregateInput;

    _max?: NotificationMaxOrderByAggregateInput;

    _min?: NotificationMinOrderByAggregateInput;
}
