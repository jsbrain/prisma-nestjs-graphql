import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { JsonObject } from 'type-fest';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';

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
export class NotificationWhereInput {
    AND?: Array<NotificationWhereInput>;

    OR?: Array<NotificationWhereInput>;

    NOT?: Array<NotificationWhereInput>;

    id?: StringFilter;

    /**
     * Timestamp when note has been seen/recognized 📝.
     * Input can be Date or valid date string but will always be transformed to Date.
     */
    seen?: DateTimeNullableFilter;

    /** Notification title. @example Your report is ready 🥳 */
    title?: StringFilter;

    text?: StringFilter;

    /** Additional metadata that should be included to the note, like 'from UserXY' etc. */
    meta?: JsonObject;

    /** Additional data being sent with the note. Limited to */
    data?: JsonNullableFilter;
}
