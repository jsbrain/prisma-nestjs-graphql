import { StringFilter } from '../prisma/string-filter.input';

export class TagScalarWhereInput {
    AND?: Array<TagScalarWhereInput>;

    OR?: Array<TagScalarWhereInput>;

    NOT?: Array<TagScalarWhereInput>;

    id?: StringFilter;

    name?: StringFilter;
}
