"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("./auth.guard");
const RoleGuard = (role) => {
    class RoleGuardMixin extends auth_guard_1.JwtAuthGuard {
        async canActivate(context) {
            await super.canActivate(context);
            const { user } = context.switchToHttp().getRequest();
            return user === null || user === void 0 ? void 0 : user.role.includes(role);
        }
    }
    return (0, common_1.mixin)(RoleGuardMixin);
};
exports.default = RoleGuard;
//# sourceMappingURL=role.guard.js.map