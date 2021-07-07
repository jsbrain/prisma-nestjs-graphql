import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleCreateInput } from './article-create.input';
import { ArticleUpdateInput } from './article-update.input';

export class UpsertOneArticleArgs {
    where!: ArticleWhereUniqueInput;

    create!: ArticleCreateInput;

    update!: ArticleUpdateInput;
}
