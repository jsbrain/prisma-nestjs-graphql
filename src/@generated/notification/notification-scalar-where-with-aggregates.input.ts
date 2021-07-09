import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { JsonObject } from 'type-fest';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';

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
export class NotificationScalarWhereWithAggregatesInput {
    AND?: Array<NotificationScalarWhereWithAggregatesInput>;

    OR?: Array<NotificationScalarWhereWithAggregatesInput>;

    NOT?: Array<NotificationScalarWhereWithAggregatesInput>;

    id?: StringWithAggregatesFilter;

    /**
     * Timestamp when note has been seen/recognized 📝.
     * Input can be Date or valid date string but will always be transformed to Date.
     */
    seen?: DateTimeNullableWithAggregatesFilter;

    /** Notification title. @example Your report is ready 🥳 */
    title?: StringWithAggregatesFilter;

    text?: StringWithAggregatesFilter;

    /** Additional metadata that should be included to the note, like 'from UserXY' etc. */
    meta?: JsonObject;

    /** Additional data being sent with the note. Limited to */
    data?: JsonObject;
}
