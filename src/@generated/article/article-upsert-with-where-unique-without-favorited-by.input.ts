import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateWithoutFavoritedByInput } from './article-update-without-favorited-by.input';
import { ArticleCreateWithoutFavoritedByInput } from './article-create-without-favorited-by.input';

export class ArticleUpsertWithWhereUniqueWithoutFavoritedByInput {

    where!: ArticleWhereUniqueInput;

    update!: ArticleUpdateWithoutFavoritedByInput;

    create!: ArticleCreateWithoutFavoritedByInput;
}
