import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
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
export class NotificationUncheckedUpdateInput {
    id?: StringFieldUpdateOperationsInput;

    /**
     * Timestamp when note has been seen/recognized 📝.
     * Input can be Date or valid date string but will always be transformed to Date.
     */
    seen?: NullableDateTimeFieldUpdateOperationsInput;

    /** Notification title. @example Your report is ready 🥳 */
    title?: StringFieldUpdateOperationsInput;

    text?: StringFieldUpdateOperationsInput;

    /** Additional metadata that should be included to the note, like 'from UserXY' etc. */
    meta?: JsonObject;

    /** Additional data being sent with the note. Limited to */
    data?: any;
}
