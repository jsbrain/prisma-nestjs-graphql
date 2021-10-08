import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

export class CommentCreateOrConnectWithoutAuthorInput {

    where!: CommentWhereUniqueInput;

    create!: CommentCreateWithoutAuthorInput;
}
