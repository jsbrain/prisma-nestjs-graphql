import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateWithoutAuthorInput } from './article-update-without-author.input';
import { ArticleCreateWithoutAuthorInput } from './article-create-without-author.input';

export class ArticleUpsertWithWhereUniqueWithoutAuthorInput {

    where!: ArticleWhereUniqueInput;

    update!: ArticleUpdateWithoutAuthorInput;

    create!: ArticleCreateWithoutAuthorInput;
}
