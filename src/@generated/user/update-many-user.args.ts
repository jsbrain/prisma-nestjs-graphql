import { ApiExtraModels } from '@nestjs/swagger';
import { UserUpdateManyMutationInput } from './user-update-many-mutation.input';
import { UserWhereInput } from './user-where.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UpdateManyUserArgs {
    data!: UserUpdateManyMutationInput;

    where?: UserWhereInput;
}
