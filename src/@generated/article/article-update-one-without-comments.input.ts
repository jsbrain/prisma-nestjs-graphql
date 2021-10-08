import { ArticleCreateOrConnectWithoutCommentsInput } from './article-create-or-connect-without-comments.input';
import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input';
import { ArticleUpdateWithoutCommentsInput } from './article-update-without-comments.input';
import { ArticleUpsertWithoutCommentsInput } from './article-upsert-without-comments.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

export class ArticleUpdateOneWithoutCommentsInput {
    create?: ArticleCreateWithoutCommentsInput;

    connectOrCreate?: ArticleCreateOrConnectWithoutCommentsInput;

    upsert?: ArticleUpsertWithoutCommentsInput;

    connect?: ArticleWhereUniqueInput;

    disconnect?: boolean;

    delete?: boolean;

    update?: ArticleUpdateWithoutCommentsInput;
}
