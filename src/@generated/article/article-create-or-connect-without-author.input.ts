import { ArticleCreateWithoutAuthorInput } from './article-create-without-author.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

export class ArticleCreateOrConnectWithoutAuthorInput {

    where!: ArticleWhereUniqueInput;

    create!: ArticleCreateWithoutAuthorInput;
}
