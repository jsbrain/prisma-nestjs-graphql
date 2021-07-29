import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ArticleUpdateManyWithoutTagsInput } from '../article/article-update-many-without-tags.input';

export class TagUpdateInput {

    id?: StringFieldUpdateOperationsInput;

    name?: StringFieldUpdateOperationsInput;

    articles?: ArticleUpdateManyWithoutTagsInput;
}
