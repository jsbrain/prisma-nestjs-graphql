import { UserUpdateWithoutCommentsInput } from './user-update-without-comments.input';
import { UserCreateWithoutCommentsInput } from './user-create-without-comments.input';

export class UserUpsertWithoutCommentsInput {

    update!: UserUpdateWithoutCommentsInput;

    create!: UserCreateWithoutCommentsInput;
}
