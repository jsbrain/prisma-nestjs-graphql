import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutCommentsInput } from './user-create-without-comments.input';

export class UserCreateOrConnectWithoutCommentsInput {
    where!: UserWhereUniqueInput;

    create!: UserCreateWithoutCommentsInput;
}
