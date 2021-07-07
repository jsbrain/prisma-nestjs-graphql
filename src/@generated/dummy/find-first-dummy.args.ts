import { DummyWhereInput } from './dummy-where.input';
import { DummyOrderByWithRelationInput } from './dummy-order-by-with-relation.input';
import { DummyWhereUniqueInput } from './dummy-where-unique.input';
import { DummyScalarFieldEnum } from './dummy-scalar-field.enum';

export class FindFirstDummyArgs {
    where?: DummyWhereInput;

    orderBy?: Array<DummyOrderByWithRelationInput>;

    cursor?: DummyWhereUniqueInput;

    take?: number;

    skip?: number;

    distinct?: Array<DummyScalarFieldEnum>;
}
