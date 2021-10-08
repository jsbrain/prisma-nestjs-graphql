import { DummyCreateManyInput } from './dummy-create-many.input';

export class CreateManyDummyArgs {

    data!: Array<DummyCreateManyInput>;

    skipDuplicates?: boolean;
}
