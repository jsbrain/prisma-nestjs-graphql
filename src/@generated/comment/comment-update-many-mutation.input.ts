import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

export class CommentUpdateManyMutationInput {

    id?: StringFieldUpdateOperationsInput;

    createdAt?: DateTimeFieldUpdateOperationsInput;

    updatedAt?: DateTimeFieldUpdateOperationsInput;

    body?: StringFieldUpdateOperationsInput;
}
