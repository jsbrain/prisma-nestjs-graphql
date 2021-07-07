import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';

export class UserCreateOrConnectWithoutArticlesInput {
    where!: UserWhereUniqueInput;

    create!: UserCreateWithoutArticlesInput;
}
