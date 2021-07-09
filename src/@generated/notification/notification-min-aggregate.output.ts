import * as Transformer from 'class-transformer';
import * as Validator from 'class-validator';
import * as Helpers from './helpers/transforms.dto.ts';
import { JsonObject } from 'type-fest';

export class NotificationMinAggregate {
    @Transformer.Type(() => String)
    @Validator.IsString()
    id?: string;

    @Helpers.dateKindTransform()
    @Transformer.Transform(dateKindTransform)
    @Validator.IsDate({
        message: `$property must be a Date instance or valid ISO8601 date string`,
    })
    seen?: Date | string;

    @Transformer.Type(() => String)
    @Validator.IsString()
    title?: string;

    text?: string;

    meta?: JsonObject;
}
