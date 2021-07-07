import { ArticleUpdateManyMutationInput } from './article-update-many-mutation.input';
import { ArticleWhereInput } from './article-where.input';

export class UpdateManyArticleArgs {
    data!: ArticleUpdateManyMutationInput;

    where?: ArticleWhereInput;
}
