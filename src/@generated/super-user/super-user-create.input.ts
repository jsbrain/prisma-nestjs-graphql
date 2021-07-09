import { Type } from 'class-transformer';
import { IsString } from 'class-validator';
import { IsEmail } from 'class-validator';
import { Exclude } from 'class-transformer';
import { IsAlphanumeric } from 'class-validator';
import { MinLength } from 'class-validator';
import { MaxLength } from 'class-validator';
import { IsOptional } from 'class-validator';
import { IsInt } from 'class-validator';
import { IsPositive } from 'class-validator';
import { Min } from 'class-validator';
import { Max } from 'class-validator';
import { Role } from '../prisma/role.enum';
import { IsEnum } from 'class-validator';

/**
 * NOTE: We currently do not need, neither support user.
 * This user model is soely for demonstration and testing purposes.
 * @default - false
 */
export class SuperUserCreateInput {
    @Type(() => String)
    @IsString()
    id?: string;

    /** Valid email for each user 📧. @unique */
    @Type(() => String)
    @IsString()
    @IsEmail()
    email!: string;

    @Exclude()
    @Type(() => String)
    @IsString()
    password!: string;

    /** Users name including all pre and surnames. @example John Doe */
    @Type(() => String)
    @IsAlphanumeric()
    @MinLength(4, { message: `Wow ... that's a short name!` })
    @MaxLength(32, { message: `Oh no 😱. It's too long!` })
    @IsOptional()
    name?: string;

    /** Users age. @example 28 */
    @Type(() => Number)
    @IsInt()
    @IsPositive()
    @Min(3)
    @Max(99, { message: `Wait ... I think you're way to old 🤔` })
    @IsOptional()
    age?: number;

    /** Random number string to test value conversion etc. @example test123 */
    @Type(() => Number)
    @IsInt()
    @IsPositive()
    @IsOptional()
    numberString?: number;

    /** The role of the user for RBAC. */
    @IsEnum(Role)
    role!: Role;
}
