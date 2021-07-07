import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input';
import { CommentCreateOrConnectWithoutArticleInput } from './comment-create-or-connect-without-article.input';
import { CommentCreateManyArticleInputEnvelope } from './comment-create-many-article-input-envelope.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

export class CommentCreateNestedManyWithoutArticleInput {

    create?: Array<CommentCreateWithoutArticleInput>;

    connectOrCreate?: Array<CommentCreateOrConnectWithoutArticleInput>;

    createMany?: CommentCreateManyArticleInputEnvelope;

    connect?: Array<CommentWhereUniqueInput>;
}
