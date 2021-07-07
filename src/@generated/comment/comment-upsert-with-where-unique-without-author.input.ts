import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithoutAuthorInput } from './comment-update-without-author.input';
import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input';

export class CommentUpsertWithWhereUniqueWithoutAuthorInput {
    where!: CommentWhereUniqueInput;

    update!: CommentUpdateWithoutAuthorInput;

    create!: CommentCreateWithoutAuthorInput;
}
