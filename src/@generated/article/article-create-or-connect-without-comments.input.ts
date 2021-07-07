import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input';

export class ArticleCreateOrConnectWithoutCommentsInput {
    where!: ArticleWhereUniqueInput;

    create!: ArticleCreateWithoutCommentsInput;
}
