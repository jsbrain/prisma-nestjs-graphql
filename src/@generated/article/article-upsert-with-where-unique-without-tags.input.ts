import { ArticleCreateWithoutTagsInput } from './article-create-without-tags.input';
import { ArticleUpdateWithoutTagsInput } from './article-update-without-tags.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

export class ArticleUpsertWithWhereUniqueWithoutTagsInput {
    where!: ArticleWhereUniqueInput;

    update!: ArticleUpdateWithoutTagsInput;

    create!: ArticleCreateWithoutTagsInput;
}
