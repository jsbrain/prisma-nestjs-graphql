import { SuperUserCountAggregate } from './super-user-count-aggregate.output';
import { SuperUserAvgAggregate } from './super-user-avg-aggregate.output';
import { SuperUserSumAggregate } from './super-user-sum-aggregate.output';
import { SuperUserMinAggregate } from './super-user-min-aggregate.output';
import { SuperUserMaxAggregate } from './super-user-max-aggregate.output';

export class AggregateSuperUser {
    _count?: SuperUserCountAggregate;

    count?: SuperUserCountAggregate;

    _avg?: SuperUserAvgAggregate;

    avg?: SuperUserAvgAggregate;

    _sum?: SuperUserSumAggregate;

    sum?: SuperUserSumAggregate;

    _min?: SuperUserMinAggregate;

    min?: SuperUserMinAggregate;

    _max?: SuperUserMaxAggregate;

    max?: SuperUserMaxAggregate;
}
