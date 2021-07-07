import { ApiExtraModels } from '@nestjs/swagger';
import { UserCreateManyInput } from './user-create-many.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class CreateManyUserArgs {
    data!: Array<UserCreateManyInput>;

    skipDuplicates?: boolean;
}
