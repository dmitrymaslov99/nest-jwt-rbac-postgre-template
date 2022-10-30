import { BaseEntity } from 'typeorm';
import Role from './role.enum';
export declare class User extends BaseEntity {
    id: number;
    email: string;
    password: string;
    name: string | null;
    lastLoginAt: Date | null;
    role: Role[];
}
