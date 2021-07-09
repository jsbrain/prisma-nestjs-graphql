import { Type } from 'class-transformer';
import { IsString } from 'class-validator';
import { IsEmail } from 'class-validator';

/**
 * NOTE: We currently do not need, neither support user.
 * This user model is soely for demonstration and testing purposes.
 * @default - false
 */
export class SuperUserWhereUniqueInput {
    @Type(() => String)
    @IsString()
    id?: string;

    /** Valid email for each user 📧. @unique */
    @Type(() => String)
    @IsString()
    @IsEmail()
    email?: string;
}
