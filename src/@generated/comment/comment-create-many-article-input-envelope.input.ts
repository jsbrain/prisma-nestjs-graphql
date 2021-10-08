import { CommentCreateManyArticleInput } from './comment-create-many-article.input';

export class CommentCreateManyArticleInputEnvelope {

    data!: Array<CommentCreateManyArticleInput>;

    skipDuplicates?: boolean;
}
