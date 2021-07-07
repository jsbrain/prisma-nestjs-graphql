import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithoutArticleInput } from './comment-update-without-article.input';
import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input';

export class CommentUpsertWithWhereUniqueWithoutArticleInput {
    where!: CommentWhereUniqueInput;

    update!: CommentUpdateWithoutArticleInput;

    create!: CommentCreateWithoutArticleInput;
}
