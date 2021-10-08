import { ArticleCreateWithoutFavoritedByInput } from './article-create-without-favorited-by.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

export class ArticleCreateOrConnectWithoutFavoritedByInput {

    where!: ArticleWhereUniqueInput;

    create!: ArticleCreateWithoutFavoritedByInput;
}
