import { Transform, Type } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';
import { GraphQLJSON } from 'graphql-type-json';
import { JsonObject } from 'type-fest';
import { dateKindTransform } from './helpers/transforms.dto.ts';

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
export class Notification {
    @Type(() => String)
    @IsString()
    id!: string;

    /**
     * Timestamp when note has been seen/recognized 📝.
     * Input can be Date or valid date string but will always be transformed to Date.
     */
    @Transform(dateKindTransform)
    @IsDate({
        message: `$property must be a Date instance or valid ISO8601 date string`,
    })
    seen!: Date | null;

    /** Notification title. @example Your report is ready 🥳 */
    @Type(() => String)
    @IsString()
    title!: string;

    text!: string;

    /** Additional metadata that should be included to the note, like 'from UserXY' etc. */
    meta!: JsonObject;

    /** Additional data being sent with the note. Limited to */
    data!: JsonObject | null;
}
