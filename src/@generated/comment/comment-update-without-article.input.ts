import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutCommentsInput } from '../user/user-update-one-required-without-comments.input';

export class CommentUpdateWithoutArticleInput {
    id?: StringFieldUpdateOperationsInput;

    createdAt?: DateTimeFieldUpdateOperationsInput;

    updatedAt?: DateTimeFieldUpdateOperationsInput;

    body?: StringFieldUpdateOperationsInput;

    author?: UserUpdateOneRequiredWithoutCommentsInput;
}
