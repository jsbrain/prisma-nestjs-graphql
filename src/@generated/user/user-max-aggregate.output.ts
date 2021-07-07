import { Role } from '../prisma/role.enum';

export class UserMaxAggregate {

    id?: string;

    age?: number;

    email?: string;

    name?: string;

    password?: string;

    bio?: string;

    image?: string;

    countComments?: number;

    rating?: number;

    role?: Role;
}
