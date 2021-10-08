import { ArticleCreateOrConnectWithoutFavoritedByInput } from './article-create-or-connect-without-favorited-by.input';
import { ArticleCreateWithoutFavoritedByInput } from './article-create-without-favorited-by.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

export class ArticleCreateNestedManyWithoutFavoritedByInput {
    create?: Array<ArticleCreateWithoutFavoritedByInput>;

    connectOrCreate?: Array<ArticleCreateOrConnectWithoutFavoritedByInput>;

    connect?: Array<ArticleWhereUniqueInput>;
}
