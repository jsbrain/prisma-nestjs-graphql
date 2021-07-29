import { ApiExtraModels } from '@nestjs/swagger';
import { UserCreateInput } from './user-create.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class CreateOneUserArgs {

    data!: UserCreateInput;
}
