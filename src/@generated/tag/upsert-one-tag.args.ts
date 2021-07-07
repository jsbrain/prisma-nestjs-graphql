import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagCreateInput } from './tag-create.input';
import { TagUpdateInput } from './tag-update.input';

export class UpsertOneTagArgs {

    where!: TagWhereUniqueInput;

    create!: TagCreateInput;

    update!: TagUpdateInput;
}
