import { ArticleCreateNestedManyWithoutTagsInput } from '../article/article-create-nested-many-without-tags.input';

export class TagCreateInput {
    id?: string;

    name!: string;

    articles?: ArticleCreateNestedManyWithoutTagsInput;
}
