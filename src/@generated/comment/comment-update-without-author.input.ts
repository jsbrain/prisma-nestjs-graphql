import { ArticleUpdateOneWithoutCommentsInput } from '../article/article-update-one-without-comments.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

export class CommentUpdateWithoutAuthorInput {

    id?: StringFieldUpdateOperationsInput;

    createdAt?: DateTimeFieldUpdateOperationsInput;

    updatedAt?: DateTimeFieldUpdateOperationsInput;

    body?: StringFieldUpdateOperationsInput;

    article?: ArticleUpdateOneWithoutCommentsInput;
}
