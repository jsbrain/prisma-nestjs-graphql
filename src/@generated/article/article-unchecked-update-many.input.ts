import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

export class ArticleUncheckedUpdateManyInput {
    id?: StringFieldUpdateOperationsInput;

    slug?: StringFieldUpdateOperationsInput;

    title?: StringFieldUpdateOperationsInput;

    description?: StringFieldUpdateOperationsInput;

    body?: StringFieldUpdateOperationsInput;

    createdAt?: DateTimeFieldUpdateOperationsInput;

    updatedAt?: DateTimeFieldUpdateOperationsInput;

    favoritesCount?: IntFieldUpdateOperationsInput;

    authorId?: StringFieldUpdateOperationsInput;

    active?: NullableBoolFieldUpdateOperationsInput;
}
