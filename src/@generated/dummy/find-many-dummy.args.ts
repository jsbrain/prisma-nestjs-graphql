import { DummyOrderByWithRelationInput } from './dummy-order-by-with-relation.input';
import { DummyScalarFieldEnum } from './dummy-scalar-field.enum';
import { DummyWhereInput } from './dummy-where.input';
import { DummyWhereUniqueInput } from './dummy-where-unique.input';

export class FindManyDummyArgs {
    where?: DummyWhereInput;

    orderBy?: Array<DummyOrderByWithRelationInput>;

    cursor?: DummyWhereUniqueInput;

    take?: number;

    skip?: number;

    distinct?: Array<DummyScalarFieldEnum>;
}
