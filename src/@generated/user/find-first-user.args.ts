import { ApiExtraModels } from '@nestjs/swagger';

import { UserOrderByWithRelationInput } from './user-order-by-with-relation.input';
import { UserScalarFieldEnum } from './user-scalar-field.enum';
import { UserWhereInput } from './user-where.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class FindFirstUserArgs {

    where?: UserWhereInput;

    orderBy?: Array<UserOrderByWithRelationInput>;

    cursor?: UserWhereUniqueInput;

    take?: number;

    skip?: number;

    distinct?: Array<UserScalarFieldEnum>;
}
