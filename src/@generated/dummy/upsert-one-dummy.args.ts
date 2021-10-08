import { DummyCreateInput } from './dummy-create.input';
import { DummyUpdateInput } from './dummy-update.input';
import { DummyWhereUniqueInput } from './dummy-where-unique.input';

export class UpsertOneDummyArgs {

    where!: DummyWhereUniqueInput;

    create!: DummyCreateInput;

    update!: DummyUpdateInput;
}
