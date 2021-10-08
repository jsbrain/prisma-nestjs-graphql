import { ArticleUpdateManyWithoutTagsInput } from '../article/article-update-many-without-tags.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

export class TagUpdateInput {
    id?: StringFieldUpdateOperationsInput;

    name?: StringFieldUpdateOperationsInput;

    articles?: ArticleUpdateManyWithoutTagsInput;
}
