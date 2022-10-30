import { Controller, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import RoleGuard from '@/auth/role.guard';
import Role from '@/users/entities/role.enum';

@Controller('admin')
@UseGuards(RoleGuard(Role.Admin))
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
}
