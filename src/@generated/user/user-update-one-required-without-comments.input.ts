import { ApiExtraModels } from '@nestjs/swagger';

import { UserCreateOrConnectWithoutCommentsInput } from './user-create-or-connect-without-comments.input';
import { UserCreateWithoutCommentsInput } from './user-create-without-comments.input';
import { UserUpdateWithoutCommentsInput } from './user-update-without-comments.input';
import { UserUpsertWithoutCommentsInput } from './user-upsert-without-comments.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserUpdateOneRequiredWithoutCommentsInput {
    create?: UserCreateWithoutCommentsInput;

    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput;

    upsert?: UserUpsertWithoutCommentsInput;

    connect?: UserWhereUniqueInput;

    update?: UserUpdateWithoutCommentsInput;
}
