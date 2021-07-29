import { ApiExtraModels } from '@nestjs/swagger';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserSumAggregateInput {

    age?: true;

    countComments?: true;

    rating?: true;
}
