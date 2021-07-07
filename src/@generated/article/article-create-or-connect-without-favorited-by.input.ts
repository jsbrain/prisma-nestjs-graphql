import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleCreateWithoutFavoritedByInput } from './article-create-without-favorited-by.input';

export class ArticleCreateOrConnectWithoutFavoritedByInput {
    where!: ArticleWhereUniqueInput;

    create!: ArticleCreateWithoutFavoritedByInput;
}
