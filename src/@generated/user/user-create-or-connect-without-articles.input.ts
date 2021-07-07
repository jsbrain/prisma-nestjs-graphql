import { ApiExtraModels } from '@nestjs/swagger';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';

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
