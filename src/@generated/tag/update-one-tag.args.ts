import { TagUpdateInput } from './tag-update.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

export class UpdateOneTagArgs {
    data!: TagUpdateInput;

    where!: TagWhereUniqueInput;
}
