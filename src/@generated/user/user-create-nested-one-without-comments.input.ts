import { ApiExtraModels } from '@nestjs/swagger';

import { UserCreateOrConnectWithoutCommentsInput } from './user-create-or-connect-without-comments.input';
import { UserCreateWithoutCommentsInput } from './user-create-without-comments.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserCreateNestedOneWithoutCommentsInput {
    create?: UserCreateWithoutCommentsInput;

    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput;

    connect?: UserWhereUniqueInput;
}
