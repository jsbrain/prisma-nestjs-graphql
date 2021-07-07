import { ArticleCreateWithoutFavoritedByInput } from './article-create-without-favorited-by.input';
import { ArticleCreateOrConnectWithoutFavoritedByInput } from './article-create-or-connect-without-favorited-by.input';
import { ArticleUpsertWithWhereUniqueWithoutFavoritedByInput } from './article-upsert-with-where-unique-without-favorited-by.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateWithWhereUniqueWithoutFavoritedByInput } from './article-update-with-where-unique-without-favorited-by.input';
import { ArticleUpdateManyWithWhereWithoutFavoritedByInput } from './article-update-many-with-where-without-favorited-by.input';
import { ArticleScalarWhereInput } from './article-scalar-where.input';

export class ArticleUpdateManyWithoutFavoritedByInput {
    create?: Array<ArticleCreateWithoutFavoritedByInput>;

    connectOrCreate?: Array<ArticleCreateOrConnectWithoutFavoritedByInput>;

    upsert?: Array<ArticleUpsertWithWhereUniqueWithoutFavoritedByInput>;

    connect?: Array<ArticleWhereUniqueInput>;

    set?: Array<ArticleWhereUniqueInput>;

    disconnect?: Array<ArticleWhereUniqueInput>;

    delete?: Array<ArticleWhereUniqueInput>;

    update?: Array<ArticleUpdateWithWhereUniqueWithoutFavoritedByInput>;

    updateMany?: Array<ArticleUpdateManyWithWhereWithoutFavoritedByInput>;

    deleteMany?: Array<ArticleScalarWhereInput>;
}
