import { ArticleCreateWithoutAuthorInput } from './article-create-without-author.input';
import { ArticleCreateOrConnectWithoutAuthorInput } from './article-create-or-connect-without-author.input';
import { ArticleCreateManyAuthorInputEnvelope } from './article-create-many-author-input-envelope.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

export class ArticleUncheckedCreateNestedManyWithoutAuthorInput {

    create?: Array<ArticleCreateWithoutAuthorInput>;

    connectOrCreate?: Array<ArticleCreateOrConnectWithoutAuthorInput>;

    createMany?: ArticleCreateManyAuthorInputEnvelope;

    connect?: Array<ArticleWhereUniqueInput>;
}
