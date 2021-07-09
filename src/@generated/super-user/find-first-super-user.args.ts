import { SuperUserWhereInput } from './super-user-where.input';
import { SuperUserOrderByWithRelationInput } from './super-user-order-by-with-relation.input';
import { SuperUserWhereUniqueInput } from './super-user-where-unique.input';
import { SuperUserScalarFieldEnum } from './super-user-scalar-field.enum';

/**
 * NOTE: We currently do not need, neither support user.
 * This user model is soely for demonstration and testing purposes.
 * @default - false
 */
export class FindFirstSuperUserArgs {
    where?: SuperUserWhereInput;

    orderBy?: Array<SuperUserOrderByWithRelationInput>;

    cursor?: SuperUserWhereUniqueInput;

    take?: number;

    skip?: number;

    distinct?: Array<SuperUserScalarFieldEnum>;
}
