import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';
import { IsPositive } from 'class-validator';
import { Min } from 'class-validator';
import { Max } from 'class-validator';
import { IsOptional } from 'class-validator';

export class SuperUserCountAggregate {
    id!: number;

    /** Valid email for each user 📧. @unique */
    email!: number;

    password!: number;

    /** Users name including all pre and surnames. @example John Doe */
    name!: number;

    /** Users age. @example 28 */
    @Type(() => Number)
    @IsInt()
    @IsPositive()
    @Min(3)
    @Max(99, { message: `Wait ... I think you're way to old 🤔` })
    @IsOptional()
    age!: number;

    /** Random number string to test value conversion etc. @example test123 */
    @Type(() => Number)
    @IsInt()
    @IsPositive()
    @IsOptional()
    numberString!: number;

    /** The role of the user for RBAC. */
    role!: number;

    _all!: number;
}
