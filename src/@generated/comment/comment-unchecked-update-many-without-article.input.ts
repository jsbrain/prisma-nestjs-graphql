import { CommentCreateManyArticleInputEnvelope } from './comment-create-many-article-input-envelope.input';
import { CommentCreateOrConnectWithoutArticleInput } from './comment-create-or-connect-without-article.input';
import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';
import { CommentUpdateManyWithWhereWithoutArticleInput } from './comment-update-many-with-where-without-article.input';
import { CommentUpdateWithWhereUniqueWithoutArticleInput } from './comment-update-with-where-unique-without-article.input';
import { CommentUpsertWithWhereUniqueWithoutArticleInput } from './comment-upsert-with-where-unique-without-article.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

export class CommentUncheckedUpdateManyWithoutArticleInput {

    create?: Array<CommentCreateWithoutArticleInput>;

    connectOrCreate?: Array<CommentCreateOrConnectWithoutArticleInput>;

    upsert?: Array<CommentUpsertWithWhereUniqueWithoutArticleInput>;

    createMany?: CommentCreateManyArticleInputEnvelope;

    connect?: Array<CommentWhereUniqueInput>;

    set?: Array<CommentWhereUniqueInput>;

    disconnect?: Array<CommentWhereUniqueInput>;

    delete?: Array<CommentWhereUniqueInput>;

    update?: Array<CommentUpdateWithWhereUniqueWithoutArticleInput>;

    updateMany?: Array<CommentUpdateManyWithWhereWithoutArticleInput>;

    deleteMany?: Array<CommentScalarWhereInput>;
}
