import { CommentCreateManyAuthorInputEnvelope } from './comment-create-many-author-input-envelope.input';
import { CommentCreateOrConnectWithoutAuthorInput } from './comment-create-or-connect-without-author.input';
import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

export class CommentCreateNestedManyWithoutAuthorInput {
    create?: Array<CommentCreateWithoutAuthorInput>;

    connectOrCreate?: Array<CommentCreateOrConnectWithoutAuthorInput>;

    createMany?: CommentCreateManyAuthorInputEnvelope;

    connect?: Array<CommentWhereUniqueInput>;
}
