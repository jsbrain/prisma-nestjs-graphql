import { ApiExtraModels } from '@nestjs/swagger';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { NullableEnumRoleFieldUpdateOperationsInput } from '../prisma/nullable-enum-role-field-update-operations.input';
import { UserUpdateManyWithoutFollowersInput } from './user-update-many-without-followers.input';
import { UserUpdateManyWithoutFollowingInput } from './user-update-many-without-following.input';
import { ArticleUpdateManyWithoutFavoritedByInput } from '../article/article-update-many-without-favorited-by.input';
import { ArticleUpdateManyWithoutAuthorInput } from '../article/article-update-many-without-author.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserUpdateWithoutCommentsInput {
    /** The id of the user */
    id?: StringFieldUpdateOperationsInput;

    age?: IntFieldUpdateOperationsInput;

    /**
     * This is a js doc comment!
     * And we can continue the comment on the next line as well :)
     */
    email?: StringFieldUpdateOperationsInput;

    /** User's name */
    name?: StringFieldUpdateOperationsInput;

    password?: StringFieldUpdateOperationsInput;

    bio?: NullableStringFieldUpdateOperationsInput;

    image?: NullableStringFieldUpdateOperationsInput;

    countComments?: NullableIntFieldUpdateOperationsInput;

    rating?: NullableFloatFieldUpdateOperationsInput;

    role?: NullableEnumRoleFieldUpdateOperationsInput;

    following?: UserUpdateManyWithoutFollowersInput;

    followers?: UserUpdateManyWithoutFollowingInput;

    favoriteArticles?: ArticleUpdateManyWithoutFavoritedByInput;

    articles?: ArticleUpdateManyWithoutAuthorInput;
}
