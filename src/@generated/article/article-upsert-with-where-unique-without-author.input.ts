import { ArticleCreateWithoutAuthorInput } from './article-create-without-author.input';
import { ArticleUpdateWithoutAuthorInput } from './article-update-without-author.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

export class ArticleUpsertWithWhereUniqueWithoutAuthorInput {

    where!: ArticleWhereUniqueInput;

    update!: ArticleUpdateWithoutAuthorInput;

    create!: ArticleCreateWithoutAuthorInput;
}
