import { ApiExtraModels } from '@nestjs/swagger';
import { UserScalarWhereInput } from './user-scalar-where.input';
import { UserUpdateManyMutationInput } from './user-update-many-mutation.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserUpdateManyWithWhereWithoutFollowersInput {
    where!: UserScalarWhereInput;

    data!: UserUpdateManyMutationInput;
}
