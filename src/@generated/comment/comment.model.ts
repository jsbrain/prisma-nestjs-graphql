import { User } from '../user/user.model';
import { Article } from '../article/article.model';

export class Comment {
    id!: string;
    createdAt!: Date;
    updatedAt!: Date;
    body!: string;
    author!: User;
    authorId!: string;
    article!: Article;
    articleId!: string | null;
}
