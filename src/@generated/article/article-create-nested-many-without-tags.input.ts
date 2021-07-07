import { ArticleCreateWithoutTagsInput } from './article-create-without-tags.input';
import { ArticleCreateOrConnectWithoutTagsInput } from './article-create-or-connect-without-tags.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

export class ArticleCreateNestedManyWithoutTagsInput {

    create?: Array<ArticleCreateWithoutTagsInput>;

    connectOrCreate?: Array<ArticleCreateOrConnectWithoutTagsInput>;

    connect?: Array<ArticleWhereUniqueInput>;
}
