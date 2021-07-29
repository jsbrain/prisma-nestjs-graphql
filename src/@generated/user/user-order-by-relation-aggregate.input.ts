import { ApiExtraModels } from '@nestjs/swagger';
import { SortOrder } from '../prisma/sort-order.enum';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserOrderByRelationAggregateInput {

    _count?: SortOrder;

    count?: SortOrder;
}
