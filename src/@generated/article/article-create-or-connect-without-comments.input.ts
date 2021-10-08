import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

export class ArticleCreateOrConnectWithoutCommentsInput {
    where!: ArticleWhereUniqueInput;

    create!: ArticleCreateWithoutCommentsInput;
}
