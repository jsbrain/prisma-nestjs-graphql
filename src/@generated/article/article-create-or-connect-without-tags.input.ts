import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleCreateWithoutTagsInput } from './article-create-without-tags.input';

export class ArticleCreateOrConnectWithoutTagsInput {

    where!: ArticleWhereUniqueInput;

    create!: ArticleCreateWithoutTagsInput;
}
