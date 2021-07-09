import { Type } from 'class-transformer';
import { IsString } from 'class-validator';
import { dateKindTransform } from './helpers/transforms.dto.ts';
import { Transform } from 'class-transformer';
import { IsDate } from 'class-validator';
import { JsonObject } from 'type-fest';
import { GraphQLJSON } from 'graphql-type-json';

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
