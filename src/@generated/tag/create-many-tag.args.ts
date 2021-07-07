import { TagCreateManyInput } from './tag-create-many.input';

export class CreateManyTagArgs {

    data!: Array<TagCreateManyInput>;

    skipDuplicates?: boolean;
}
