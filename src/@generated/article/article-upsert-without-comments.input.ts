import { ArticleUpdateWithoutCommentsInput } from './article-update-without-comments.input';
import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input';

export class ArticleUpsertWithoutCommentsInput {
    update!: ArticleUpdateWithoutCommentsInput;

    create!: ArticleCreateWithoutCommentsInput;
}
