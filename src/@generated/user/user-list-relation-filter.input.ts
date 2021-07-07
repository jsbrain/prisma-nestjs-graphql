import { ApiExtraModels } from '@nestjs/swagger';
import { UserWhereInput } from './user-where.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserListRelationFilter {
    every?: UserWhereInput;

    some?: UserWhereInput;

    none?: UserWhereInput;
}
