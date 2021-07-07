import { UserCreateWithoutCommentsInput } from './user-create-without-comments.input';
import { UserCreateOrConnectWithoutCommentsInput } from './user-create-or-connect-without-comments.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

export class UserCreateNestedOneWithoutCommentsInput {

    create?: UserCreateWithoutCommentsInput;

    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput;

    connect?: UserWhereUniqueInput;
}
