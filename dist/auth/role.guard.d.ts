import { CanActivate, Type } from '@nestjs/common';
import Role from '@/users/entities/role.enum';
declare const RoleGuard: (role: Role) => Type<CanActivate>;
export default RoleGuard;
