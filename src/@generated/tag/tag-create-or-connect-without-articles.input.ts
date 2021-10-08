import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

export class TagCreateOrConnectWithoutArticlesInput {

    where!: TagWhereUniqueInput;

    create!: TagCreateWithoutArticlesInput;
}
