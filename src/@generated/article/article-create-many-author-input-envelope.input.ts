import { ArticleCreateManyAuthorInput } from './article-create-many-author.input';

export class ArticleCreateManyAuthorInputEnvelope {
    data!: Array<ArticleCreateManyAuthorInput>;

    skipDuplicates?: boolean;
}
