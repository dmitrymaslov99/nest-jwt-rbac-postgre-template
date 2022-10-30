import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';
import Role from '@/users/entities/role.enum';
import { JwtAuthGuard } from '@/auth/auth.guard';
import { Request } from 'express';

const RoleGuard = (role: Role): Type<CanActivate> => {
  class RoleGuardMixin extends JwtAuthGuard {
    async canActivate(context: ExecutionContext) {
      await super.canActivate(context);

      const { user }: Request = context.switchToHttp().getRequest();


      // @ts-ignore
      return user?.role.includes(role);
    }
  }

  return mixin(RoleGuardMixin);
};

export default RoleGuard;
