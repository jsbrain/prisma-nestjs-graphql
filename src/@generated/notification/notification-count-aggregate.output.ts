import { JsonObject } from 'type-fest';

export class NotificationCountAggregate {
    id!: number;

    seen!: number;

    title!: number;

    text!: number;

    meta!: JsonObject;

    data!: number;

    _all!: number;
}
