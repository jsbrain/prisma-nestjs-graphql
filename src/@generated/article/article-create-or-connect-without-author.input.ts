import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleCreateWithoutAuthorInput } from './article-create-without-author.input';

export class ArticleCreateOrConnectWithoutAuthorInput {

    where!: ArticleWhereUniqueInput;

    create!: ArticleCreateWithoutAuthorInput;
}
