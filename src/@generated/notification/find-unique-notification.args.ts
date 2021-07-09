import { NotificationWhereUniqueInput } from './notification-where-unique.input';

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
export class FindUniqueNotificationArgs {
    where!: NotificationWhereUniqueInput;
}
