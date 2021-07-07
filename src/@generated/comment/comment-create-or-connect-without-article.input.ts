import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input';

export class CommentCreateOrConnectWithoutArticleInput {

    where!: CommentWhereUniqueInput;

    create!: CommentCreateWithoutArticleInput;
}
