import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input';
import { CommentUpdateWithoutAuthorInput } from './comment-update-without-author.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

export class CommentUpsertWithWhereUniqueWithoutAuthorInput {

    where!: CommentWhereUniqueInput;

    update!: CommentUpdateWithoutAuthorInput;

    create!: CommentCreateWithoutAuthorInput;
}
