import { NotificationCountAggregate } from './notification-count-aggregate.output';
import { NotificationMinAggregate } from './notification-min-aggregate.output';
import { NotificationMaxAggregate } from './notification-max-aggregate.output';

export class AggregateNotification {
    _count?: NotificationCountAggregate;

    count?: NotificationCountAggregate;

    _min?: NotificationMinAggregate;

    min?: NotificationMinAggregate;

    _max?: NotificationMaxAggregate;

    max?: NotificationMaxAggregate;
}
