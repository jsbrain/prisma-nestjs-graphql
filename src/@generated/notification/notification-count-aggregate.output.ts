export class NotificationCountAggregate {
    id!: number;

    /**
     * Timestamp when note has been seen/recognized 📝.
     * Input can be Date or valid date string but will always be transformed to Date.
     */
    seen!: number;

    /** Notification title. @example Your report is ready 🥳 */
    title!: number;

    text!: number;

    /** Additional metadata that should be included to the note, like 'from UserXY' etc. */
    meta!: number;

    /** Additional data being sent with the note. Limited to */
    data!: number;

    _all!: number;
}
