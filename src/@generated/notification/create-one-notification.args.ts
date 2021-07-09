import { JsonObject } from 'type-fest';
import { NotificationCreateInput } from './notification-create.input';

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
export class CreateOneNotificationArgs {
    /** Additional data being sent with the note. Limited to */
    data!: JsonObject;
}
