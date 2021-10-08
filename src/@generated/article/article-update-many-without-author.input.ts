import { ArticleCreateManyAuthorInputEnvelope } from './article-create-many-author-input-envelope.input';
import { ArticleCreateOrConnectWithoutAuthorInput } from './article-create-or-connect-without-author.input';
import { ArticleCreateWithoutAuthorInput } from './article-create-without-author.input';
import { ArticleScalarWhereInput } from './article-scalar-where.input';
import { ArticleUpdateManyWithWhereWithoutAuthorInput } from './article-update-many-with-where-without-author.input';
import { ArticleUpdateWithWhereUniqueWithoutAuthorInput } from './article-update-with-where-unique-without-author.input';
import { ArticleUpsertWithWhereUniqueWithoutAuthorInput } from './article-upsert-with-where-unique-without-author.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

export class ArticleUpdateManyWithoutAuthorInput {

    create?: Array<ArticleCreateWithoutAuthorInput>;

    connectOrCreate?: Array<ArticleCreateOrConnectWithoutAuthorInput>;

    upsert?: Array<ArticleUpsertWithWhereUniqueWithoutAuthorInput>;

    createMany?: ArticleCreateManyAuthorInputEnvelope;

    connect?: Array<ArticleWhereUniqueInput>;

    set?: Array<ArticleWhereUniqueInput>;

    disconnect?: Array<ArticleWhereUniqueInput>;

    delete?: Array<ArticleWhereUniqueInput>;

    update?: Array<ArticleUpdateWithWhereUniqueWithoutAuthorInput>;

    updateMany?: Array<ArticleUpdateManyWithWhereWithoutAuthorInput>;

    deleteMany?: Array<ArticleScalarWhereInput>;
}
