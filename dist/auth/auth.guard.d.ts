import { ExecutionContext } from '@nestjs/common';
import { IAuthGuard } from '@nestjs/passport';
import { User } from '@/users/entities/user.entity';
declare const JwtAuthGuard_base: import("@nestjs/passport").Type<IAuthGuard>;
export declare class JwtAuthGuard extends JwtAuthGuard_base implements IAuthGuard {
    handleRequest(err: unknown, user: User): any;
    canActivate(context: ExecutionContext): Promise<boolean>;
}
export {};
