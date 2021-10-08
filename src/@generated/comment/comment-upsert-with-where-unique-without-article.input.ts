import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input';
import { CommentUpdateWithoutArticleInput } from './comment-update-without-article.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

export class CommentUpsertWithWhereUniqueWithoutArticleInput {

    where!: CommentWhereUniqueInput;

    update!: CommentUpdateWithoutArticleInput;

    create!: CommentCreateWithoutArticleInput;
}
