import { ApiExtraModels } from '@nestjs/swagger';

import { UserUpdateInput } from './user-update.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UpdateOneUserArgs {

    data!: UserUpdateInput;

    where!: UserWhereUniqueInput;
}
