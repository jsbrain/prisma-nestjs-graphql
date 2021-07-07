import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { NullableEnumRoleFieldUpdateOperationsInput } from '../prisma/nullable-enum-role-field-update-operations.input';
import { UserUpdateManyWithoutFollowersInput } from './user-update-many-without-followers.input';
import { ArticleUpdateManyWithoutFavoritedByInput } from '../article/article-update-many-without-favorited-by.input';
import { ArticleUpdateManyWithoutAuthorInput } from '../article/article-update-many-without-author.input';
import { CommentUpdateManyWithoutAuthorInput } from '../comment/comment-update-many-without-author.input';

export class UserUpdateWithoutFollowersInput {
    id?: StringFieldUpdateOperationsInput;

    age?: IntFieldUpdateOperationsInput;

    email?: StringFieldUpdateOperationsInput;

    name?: StringFieldUpdateOperationsInput;

    password?: StringFieldUpdateOperationsInput;

    bio?: NullableStringFieldUpdateOperationsInput;

    image?: NullableStringFieldUpdateOperationsInput;

    countComments?: NullableIntFieldUpdateOperationsInput;

    rating?: NullableFloatFieldUpdateOperationsInput;

    role?: NullableEnumRoleFieldUpdateOperationsInput;

    following?: UserUpdateManyWithoutFollowersInput;

    favoriteArticles?: ArticleUpdateManyWithoutFavoritedByInput;

    articles?: ArticleUpdateManyWithoutAuthorInput;

    comments?: CommentUpdateManyWithoutAuthorInput;
}
