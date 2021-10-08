import { ApiExtraModels } from '@nestjs/swagger';

import { UserCreateInput } from './user-create.input';
import { UserUpdateInput } from './user-update.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UpsertOneUserArgs {
    where!: UserWhereUniqueInput;

    create!: UserCreateInput;

    update!: UserUpdateInput;
}
