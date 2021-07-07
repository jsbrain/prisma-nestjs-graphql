import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input';
import { CommentCreateOrConnectWithoutAuthorInput } from './comment-create-or-connect-without-author.input';
import { CommentUpsertWithWhereUniqueWithoutAuthorInput } from './comment-upsert-with-where-unique-without-author.input';
import { CommentCreateManyAuthorInputEnvelope } from './comment-create-many-author-input-envelope.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutAuthorInput } from './comment-update-with-where-unique-without-author.input';
import { CommentUpdateManyWithWhereWithoutAuthorInput } from './comment-update-many-with-where-without-author.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';

export class CommentUpdateManyWithoutAuthorInput {
    create?: Array<CommentCreateWithoutAuthorInput>;

    connectOrCreate?: Array<CommentCreateOrConnectWithoutAuthorInput>;

    upsert?: Array<CommentUpsertWithWhereUniqueWithoutAuthorInput>;

    createMany?: CommentCreateManyAuthorInputEnvelope;

    connect?: Array<CommentWhereUniqueInput>;

    set?: Array<CommentWhereUniqueInput>;

    disconnect?: Array<CommentWhereUniqueInput>;

    delete?: Array<CommentWhereUniqueInput>;

    update?: Array<CommentUpdateWithWhereUniqueWithoutAuthorInput>;

    updateMany?: Array<CommentUpdateManyWithWhereWithoutAuthorInput>;

    deleteMany?: Array<CommentScalarWhereInput>;
}
