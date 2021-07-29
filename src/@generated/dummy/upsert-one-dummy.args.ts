import { DummyWhereUniqueInput } from './dummy-where-unique.input';
import { DummyCreateInput } from './dummy-create.input';
import { DummyUpdateInput } from './dummy-update.input';

export class UpsertOneDummyArgs {

    where!: DummyWhereUniqueInput;

    create!: DummyCreateInput;

    update!: DummyUpdateInput;
}
