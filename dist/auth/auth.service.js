"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const auth_helper_1 = require("./auth.helper");
const user_entity_1 = require("../users/entities/user.entity");
let AuthService = class AuthService {
    async register(body) {
        const { name, email, password } = body;
        console.log('name', name);
        let user = await this.repository.findOne({ where: { email } });
        if (user) {
            throw new common_1.HttpException('Conflict', common_1.HttpStatus.CONFLICT);
        }
        user = new user_entity_1.User();
        user.name = name;
        user.email = email;
        user.password = this.helper.encodePassword(password);
        return this.repository.save(user);
    }
    async login(body) {
        const { email, password } = body;
        const user = await this.repository.findOne({ where: { email } });
        if (!user) {
            throw new common_1.HttpException('No user found', common_1.HttpStatus.NOT_FOUND);
        }
        const isPasswordValid = this.helper.isPasswordValid(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.HttpException('No user found', common_1.HttpStatus.NOT_FOUND);
        }
        this.repository.update(user.id, { lastLoginAt: new Date() });
        return this.helper.generateToken(user);
    }
    async refresh(user) {
        this.repository.update(user.id, { lastLoginAt: new Date() });
        return this.helper.generateToken(user);
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(user_entity_1.User),
    __metadata("design:type", typeorm_2.Repository)
], AuthService.prototype, "repository", void 0);
__decorate([
    (0, common_1.Inject)(auth_helper_1.AuthHelper),
    __metadata("design:type", auth_helper_1.AuthHelper)
], AuthService.prototype, "helper", void 0);
AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map