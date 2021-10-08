import { ApiExtraModels } from '@nestjs/swagger';

import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserCreateOrConnectWithoutArticlesInput {
    where!: UserWhereUniqueInput;

    create!: UserCreateWithoutArticlesInput;
}
