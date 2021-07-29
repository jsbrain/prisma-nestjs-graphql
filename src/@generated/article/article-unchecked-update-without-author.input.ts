import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { CommentUncheckedUpdateManyWithoutArticleInput } from '../comment/comment-unchecked-update-many-without-article.input';

export class ArticleUncheckedUpdateWithoutAuthorInput {

    id?: StringFieldUpdateOperationsInput;

    slug?: StringFieldUpdateOperationsInput;

    title?: StringFieldUpdateOperationsInput;

    description?: StringFieldUpdateOperationsInput;

    body?: StringFieldUpdateOperationsInput;

    createdAt?: DateTimeFieldUpdateOperationsInput;

    updatedAt?: DateTimeFieldUpdateOperationsInput;

    favoritesCount?: IntFieldUpdateOperationsInput;

    active?: NullableBoolFieldUpdateOperationsInput;

    comments?: CommentUncheckedUpdateManyWithoutArticleInput;
}
