import * as Transformer from 'class-transformer';
import * as Validator from 'class-validator';
import * as Helpers from './helpers/transforms.dto.ts';
import { JsonObject } from 'type-fest';
import { GraphQLJSON } from 'graphql-type-json';
import { NotificationCountAggregate } from './notification-count-aggregate.output';
import { NotificationMinAggregate } from './notification-min-aggregate.output';
import { NotificationMaxAggregate } from './notification-max-aggregate.output';

export class NotificationGroupBy {
    @Transformer.Type(() => String)
    @Validator.IsString()
    id!: string;

    @Helpers.dateKindTransform()
    @Transformer.Transform(dateKindTransform)
    @Validator.IsDate({
        message: `$property must be a Date instance or valid ISO8601 date string`,
    })
    seen?: Date | string;

    @Transformer.Type(() => String)
    @Validator.IsString()
    title!: string;

    text!: string;

    meta!: JsonObject;

    data?: JsonObject;

    _count?: NotificationCountAggregate;

    _min?: NotificationMinAggregate;

    _max?: NotificationMaxAggregate;
}
