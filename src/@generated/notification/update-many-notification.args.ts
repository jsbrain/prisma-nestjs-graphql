import { NotificationUpdateManyMutationInput } from './notification-update-many-mutation.input';
import { NotificationWhereInput } from './notification-where.input';

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
export class UpdateManyNotificationArgs {
    /** Additional data being sent with the note. Limited to */
    data!: NotificationUpdateManyMutationInput;

    where?: NotificationWhereInput;
}
