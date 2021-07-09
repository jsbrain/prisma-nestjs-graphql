import { Type } from 'class-transformer';
import { IsString } from 'class-validator';
import { dateKindTransform } from './helpers/transforms.dto.ts';
import { Transform } from 'class-transformer';
import { IsDate } from 'class-validator';
import { JsonObject } from 'type-fest';
import { NotificationCountAggregate } from './notification-count-aggregate.output';
import { NotificationMinAggregate } from './notification-min-aggregate.output';
import { NotificationMaxAggregate } from './notification-max-aggregate.output';

export class NotificationGroupBy {
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
    seen?: Date | string;

    /** Notification title. @example Your report is ready 🥳 */
    @Type(() => String)
    @IsString()
    title!: string;

    text!: string;

    /** Additional metadata that should be included to the note, like 'from UserXY' etc. */
    meta!: string;

    /** Additional data being sent with the note. Limited to */
    data?: any;

    _count?: NotificationCountAggregate;

    _min?: NotificationMinAggregate;

    _max?: NotificationMaxAggregate;
}
