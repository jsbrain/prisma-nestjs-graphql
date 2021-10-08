import { ArticleCreateOrConnectWithoutCommentsInput } from './article-create-or-connect-without-comments.input';
import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

export class ArticleCreateNestedOneWithoutCommentsInput {

    create?: ArticleCreateWithoutCommentsInput;

    connectOrCreate?: ArticleCreateOrConnectWithoutCommentsInput;

    connect?: ArticleWhereUniqueInput;
}
