import { ApiExtraModels } from '@nestjs/swagger';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserAvgAggregateInput {

    age?: true;

    countComments?: true;

    rating?: true;
}
