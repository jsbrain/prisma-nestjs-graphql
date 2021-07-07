import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { NullableEnumRoleFieldUpdateOperationsInput } from '../prisma/nullable-enum-role-field-update-operations.input';

export class UserUncheckedUpdateManyInput {
    id?: StringFieldUpdateOperationsInput;

    age?: IntFieldUpdateOperationsInput;

    email?: StringFieldUpdateOperationsInput;

    name?: StringFieldUpdateOperationsInput;

    password?: StringFieldUpdateOperationsInput;

    bio?: NullableStringFieldUpdateOperationsInput;

    image?: NullableStringFieldUpdateOperationsInput;

    countComments?: NullableIntFieldUpdateOperationsInput;

    rating?: NullableFloatFieldUpdateOperationsInput;

    role?: NullableEnumRoleFieldUpdateOperationsInput;
}
