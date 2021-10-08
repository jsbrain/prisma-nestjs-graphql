import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

export class CommentCreateOrConnectWithoutArticleInput {
    where!: CommentWhereUniqueInput;

    create!: CommentCreateWithoutArticleInput;
}
