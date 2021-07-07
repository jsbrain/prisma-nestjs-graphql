import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input';
import { TagCreateOrConnectWithoutArticlesInput } from './tag-create-or-connect-without-articles.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

export class TagCreateNestedManyWithoutArticlesInput {
    create?: Array<TagCreateWithoutArticlesInput>;

    connectOrCreate?: Array<TagCreateOrConnectWithoutArticlesInput>;

    connect?: Array<TagWhereUniqueInput>;
}
