import { Article } from '../article/article.model';
import { TagCount } from './tag-count.output';

export class Tag {

    id!: string;

    name!: string;

    articles!: Array<Article>;

    _count!: TagCount;
}
