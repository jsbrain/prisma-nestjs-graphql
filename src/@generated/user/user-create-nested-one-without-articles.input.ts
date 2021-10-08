import { ApiExtraModels } from '@nestjs/swagger';

import { UserCreateOrConnectWithoutArticlesInput } from './user-create-or-connect-without-articles.input';
import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserCreateNestedOneWithoutArticlesInput {
    create?: UserCreateWithoutArticlesInput;

    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput;

    connect?: UserWhereUniqueInput;
}
