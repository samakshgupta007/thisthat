"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionModule = void 0;
const common_1 = require("@nestjs/common");
const option_controller_1 = require("./option.controller");
const option_service_1 = require("./option.service");
const option_provider_1 = require("./option.provider");
const database_module_1 = require("../../infrastructure/db/database.module");
const jwt_1 = require("@nestjs/jwt");
let OptionModule = class OptionModule {
};
OptionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            jwt_1.JwtModule.register({
                secret: 'SECRET_VALUE',
                signOptions: { expiresIn: '1d' },
            }),
        ],
        controllers: [option_controller_1.OptionController],
        providers: [option_service_1.OptionService, ...option_provider_1.optionProviders],
        exports: [option_service_1.OptionService],
    })
], OptionModule);
exports.OptionModule = OptionModule;
//# sourceMappingURL=option.module.js.map