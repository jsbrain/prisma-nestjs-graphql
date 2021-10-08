import { ArticleCreateWithoutTagsInput } from './article-create-without-tags.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

export class ArticleCreateOrConnectWithoutTagsInput {

    where!: ArticleWhereUniqueInput;

    create!: ArticleCreateWithoutTagsInput;
}
