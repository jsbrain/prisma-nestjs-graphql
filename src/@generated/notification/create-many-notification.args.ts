import { JsonObject } from 'type-fest';
import { NotificationCreateManyInput } from './notification-create-many.input';

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
export class CreateManyNotificationArgs {
    /** Additional data being sent with the note. Limited to */
    data!: Array<JsonObject>;

    skipDuplicates?: boolean;
}
