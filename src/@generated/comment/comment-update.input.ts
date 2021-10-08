import { ArticleUpdateOneWithoutCommentsInput } from '../article/article-update-one-without-comments.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutCommentsInput } from '../user/user-update-one-required-without-comments.input';

export class CommentUpdateInput {
    id?: StringFieldUpdateOperationsInput;

    createdAt?: DateTimeFieldUpdateOperationsInput;

    updatedAt?: DateTimeFieldUpdateOperationsInput;

    body?: StringFieldUpdateOperationsInput;

    author?: UserUpdateOneRequiredWithoutCommentsInput;

    article?: ArticleUpdateOneWithoutCommentsInput;
}
