import { CommentUpdateManyWithoutArticleInput } from '../comment/comment-update-many-without-article.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TagUpdateManyWithoutArticlesInput } from '../tag/tag-update-many-without-articles.input';
import { UserUpdateOneRequiredWithoutArticlesInput } from '../user/user-update-one-required-without-articles.input';

export class ArticleUpdateWithoutFavoritedByInput {

    id?: StringFieldUpdateOperationsInput;

    slug?: StringFieldUpdateOperationsInput;

    title?: StringFieldUpdateOperationsInput;

    description?: StringFieldUpdateOperationsInput;

    body?: StringFieldUpdateOperationsInput;

    createdAt?: DateTimeFieldUpdateOperationsInput;

    updatedAt?: DateTimeFieldUpdateOperationsInput;

    favoritesCount?: IntFieldUpdateOperationsInput;

    active?: NullableBoolFieldUpdateOperationsInput;

    tags?: TagUpdateManyWithoutArticlesInput;

    author?: UserUpdateOneRequiredWithoutArticlesInput;

    comments?: CommentUpdateManyWithoutArticleInput;
}
