import { ApiExtraModels } from '@nestjs/swagger';
import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';
import { UserCreateOrConnectWithoutArticlesInput } from './user-create-or-connect-without-articles.input';
import { UserUpsertWithoutArticlesInput } from './user-upsert-without-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutArticlesInput } from './user-update-without-articles.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserUpdateOneRequiredWithoutArticlesInput {
    create?: UserCreateWithoutArticlesInput;

    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput;

    upsert?: UserUpsertWithoutArticlesInput;

    connect?: UserWhereUniqueInput;

    update?: UserUpdateWithoutArticlesInput;
}
