import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { NullableBytesFieldUpdateOperationsInput } from '../prisma/nullable-bytes-field-update-operations.input';
import { NullableDecimalFieldUpdateOperationsInput } from '../prisma/nullable-decimal-field-update-operations.input';
import { NullableBigIntFieldUpdateOperationsInput } from '../prisma/nullable-big-int-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DummyUpdatefriendsInput } from '../prisma/dummy-updatefriends.input';

export class DummyUpdateManyMutationInput {

    id?: StringFieldUpdateOperationsInput;

    created?: DateTimeFieldUpdateOperationsInput;

    floaty?: FloatFieldUpdateOperationsInput;

    int?: NullableIntFieldUpdateOperationsInput;

    float?: NullableFloatFieldUpdateOperationsInput;

    bytes?: NullableBytesFieldUpdateOperationsInput;

    decimal?: NullableDecimalFieldUpdateOperationsInput;

    bigInt?: NullableBigIntFieldUpdateOperationsInput;

    json?: any;

    friends?: DummyUpdatefriendsInput;
}
