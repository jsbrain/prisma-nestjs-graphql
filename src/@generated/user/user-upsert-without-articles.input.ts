import { UserUpdateWithoutArticlesInput } from './user-update-without-articles.input';
import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';

export class UserUpsertWithoutArticlesInput {

    update!: UserUpdateWithoutArticlesInput;

    create!: UserCreateWithoutArticlesInput;
}
