import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input';

export class CommentCreateOrConnectWithoutAuthorInput {
    where!: CommentWhereUniqueInput;

    create!: CommentCreateWithoutAuthorInput;
}
