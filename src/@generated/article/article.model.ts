import { Comment } from '../comment/comment.model';
import { Tag } from '../tag/tag.model';
import { User } from '../user/user.model';
import { ArticleCount } from './article-count.output';

export class Article {

    id!: string;

    slug!: string;

    title!: string;

    description!: string;

    body!: string;

    tags!: Array<Tag>;

    createdAt!: Date;

    updatedAt!: Date;

    favoritesCount!: number;

    author!: User;

    authorId!: string;

    favoritedBy!: Array<User>;

    comments!: Array<Comment>;

    active!: boolean | null;

    _count!: ArticleCount;
}
