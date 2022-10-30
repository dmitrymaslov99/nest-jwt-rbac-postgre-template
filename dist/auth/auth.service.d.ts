import { User } from '@/users/entities/user.entity';
import { RegisterDto } from '@/auth/dto/register-auth.dto';
import { LoginDto } from '@/auth/dto/login-auth.dto';
export declare class AuthService {
    private readonly repository;
    private readonly helper;
    register(body: RegisterDto): Promise<User | never>;
    login(body: LoginDto): Promise<string | never>;
    refresh(user: User): Promise<string>;
}
