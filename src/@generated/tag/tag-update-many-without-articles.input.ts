import { TagCreateOrConnectWithoutArticlesInput } from './tag-create-or-connect-without-articles.input';
import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input';
import { TagScalarWhereInput } from './tag-scalar-where.input';
import { TagUpdateManyWithWhereWithoutArticlesInput } from './tag-update-many-with-where-without-articles.input';
import { TagUpdateWithWhereUniqueWithoutArticlesInput } from './tag-update-with-where-unique-without-articles.input';
import { TagUpsertWithWhereUniqueWithoutArticlesInput } from './tag-upsert-with-where-unique-without-articles.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

export class TagUpdateManyWithoutArticlesInput {
    create?: Array<TagCreateWithoutArticlesInput>;

    connectOrCreate?: Array<TagCreateOrConnectWithoutArticlesInput>;

    upsert?: Array<TagUpsertWithWhereUniqueWithoutArticlesInput>;

    connect?: Array<TagWhereUniqueInput>;

    set?: Array<TagWhereUniqueInput>;

    disconnect?: Array<TagWhereUniqueInput>;

    delete?: Array<TagWhereUniqueInput>;

    update?: Array<TagUpdateWithWhereUniqueWithoutArticlesInput>;

    updateMany?: Array<TagUpdateManyWithWhereWithoutArticlesInput>;

    deleteMany?: Array<TagScalarWhereInput>;
}
