import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateWithoutTagsInput } from './article-update-without-tags.input';
import { ArticleCreateWithoutTagsInput } from './article-create-without-tags.input';

export class ArticleUpsertWithWhereUniqueWithoutTagsInput {

    where!: ArticleWhereUniqueInput;

    update!: ArticleUpdateWithoutTagsInput;

    create!: ArticleCreateWithoutTagsInput;
}
