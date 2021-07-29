import { CommentCreateManyAuthorInput } from './comment-create-many-author.input';

export class CommentCreateManyAuthorInputEnvelope {

    data!: Array<CommentCreateManyAuthorInput>;

    skipDuplicates?: boolean;
}
