import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';
import { UserCreateOrConnectWithoutArticlesInput } from './user-create-or-connect-without-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

export class UserCreateNestedOneWithoutArticlesInput {
    create?: UserCreateWithoutArticlesInput;

    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput;

    connect?: UserWhereUniqueInput;
}
