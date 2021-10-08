import { TagOrderByWithRelationInput } from './tag-order-by-with-relation.input';
import { TagScalarFieldEnum } from './tag-scalar-field.enum';
import { TagWhereInput } from './tag-where.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

export class FindFirstTagArgs {

    where?: TagWhereInput;

    orderBy?: Array<TagOrderByWithRelationInput>;

    cursor?: TagWhereUniqueInput;

    take?: number;

    skip?: number;

    distinct?: Array<TagScalarFieldEnum>;
}
