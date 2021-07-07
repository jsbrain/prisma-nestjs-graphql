import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input';

export class TagCreateOrConnectWithoutArticlesInput {
    where!: TagWhereUniqueInput;

    create!: TagCreateWithoutArticlesInput;
}
