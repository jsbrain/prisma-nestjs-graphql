import { JsonObject } from 'type-fest';

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
export class NotificationCountAggregateInput {
    id?: true;

    /**
     * Timestamp when note has been seen/recognized 📝.
     * Input can be Date or valid date string but will always be transformed to Date.
     */
    seen?: true;

    /** Notification title. @example Your report is ready 🥳 */
    title?: true;

    text?: true;

    /** Additional metadata that should be included to the note, like 'from UserXY' etc. */
    meta?: JsonObject;

    /** Additional data being sent with the note. Limited to */
    data?: true;

    _all?: true;
}
