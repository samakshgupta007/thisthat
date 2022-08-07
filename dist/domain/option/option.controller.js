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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionController = void 0;
const common_1 = require("@nestjs/common");
const option_service_1 = require("./option.service");
const jwt_1 = require("@nestjs/jwt");
let OptionController = class OptionController {
    constructor(optionService, jwtService) {
        this.optionService = optionService;
        this.jwtService = jwtService;
    }
    async checkLoggedIn(request) {
        try {
            const cookie = request.cookies['token'];
            const data = await this.jwtService.verifyAsync(cookie);
            if (!data)
                throw new common_1.UnauthorizedException('Unauthorized.');
        }
        catch (_a) {
            throw new common_1.UnauthorizedException('Unauthorized.');
        }
    }
    async getAllOptions(questionID) {
        return this.optionService.findAll(questionID);
    }
    async addOption(option) {
        return this.optionService.create(option);
    }
    async updateOption(option, id) {
        return this.optionService.update(option, id);
    }
    async deleteUser(id) {
        return this.optionService.deleteById(id);
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Query)('questionID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OptionController.prototype, "getAllOptions", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OptionController.prototype, "addOption", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], OptionController.prototype, "updateOption", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OptionController.prototype, "deleteUser", null);
OptionController = __decorate([
    (0, common_1.Controller)('/option'),
    __metadata("design:paramtypes", [option_service_1.OptionService,
        jwt_1.JwtService])
], OptionController);
exports.OptionController = OptionController;
//# sourceMappingURL=option.controller.js.map