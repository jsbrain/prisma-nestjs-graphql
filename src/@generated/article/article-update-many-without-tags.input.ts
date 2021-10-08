import { ArticleCreateOrConnectWithoutTagsInput } from './article-create-or-connect-without-tags.input';
import { ArticleCreateWithoutTagsInput } from './article-create-without-tags.input';
import { ArticleScalarWhereInput } from './article-scalar-where.input';
import { ArticleUpdateManyWithWhereWithoutTagsInput } from './article-update-many-with-where-without-tags.input';
import { ArticleUpdateWithWhereUniqueWithoutTagsInput } from './article-update-with-where-unique-without-tags.input';
import { ArticleUpsertWithWhereUniqueWithoutTagsInput } from './article-upsert-with-where-unique-without-tags.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

export class ArticleUpdateManyWithoutTagsInput {

    create?: Array<ArticleCreateWithoutTagsInput>;

    connectOrCreate?: Array<ArticleCreateOrConnectWithoutTagsInput>;

    upsert?: Array<ArticleUpsertWithWhereUniqueWithoutTagsInput>;

    connect?: Array<ArticleWhereUniqueInput>;

    set?: Array<ArticleWhereUniqueInput>;

    disconnect?: Array<ArticleWhereUniqueInput>;

    delete?: Array<ArticleWhereUniqueInput>;

    update?: Array<ArticleUpdateWithWhereUniqueWithoutTagsInput>;

    updateMany?: Array<ArticleUpdateManyWithWhereWithoutTagsInput>;

    deleteMany?: Array<ArticleScalarWhereInput>;
}
