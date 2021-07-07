import { ArticleUpdateInput } from './article-update.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

export class UpdateOneArticleArgs {

    data!: ArticleUpdateInput;

    where!: ArticleWhereUniqueInput;
}
