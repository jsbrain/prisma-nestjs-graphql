import { ArticleCreateManyInput } from './article-create-many.input';

export class CreateManyArticleArgs {

    data!: Array<ArticleCreateManyInput>;

    skipDuplicates?: boolean;
}
