import { ApiExtraModels } from '@nestjs/swagger';

import { ArticleListRelationFilter } from '../article/article-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { EnumRoleNullableFilter } from '../prisma/enum-role-nullable-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UserListRelationFilter } from './user-list-relation-filter.input';

/**
 * User really
 * With muchos textos
 * Grande grande ole
 */
@ApiExtraModels()
export class UserWhereInput {

    AND?: Array<UserWhereInput>;

    OR?: Array<UserWhereInput>;

    NOT?: Array<UserWhereInput>;

    /** The id of the user */
    id?: StringFilter;

    age?: IntFilter;

    /**
     * This is a js doc comment!
     * And we can continue the comment on the next line as well :)
     */
    email?: StringFilter;

    /** User's name */
    name?: StringFilter;

    password?: StringFilter;

    bio?: StringNullableFilter;

    image?: StringNullableFilter;

    following?: UserListRelationFilter;

    followers?: UserListRelationFilter;

    favoriteArticles?: ArticleListRelationFilter;

    articles?: ArticleListRelationFilter;

    comments?: CommentListRelationFilter;

    countComments?: IntNullableFilter;

    rating?: FloatNullableFilter;

    role?: EnumRoleNullableFilter;
}
