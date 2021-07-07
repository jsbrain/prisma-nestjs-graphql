import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateWithoutArticlesInput } from './tag-update-without-articles.input';
import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input';

export class TagUpsertWithWhereUniqueWithoutArticlesInput {

    where!: TagWhereUniqueInput;

    update!: TagUpdateWithoutArticlesInput;

    create!: TagCreateWithoutArticlesInput;
}
