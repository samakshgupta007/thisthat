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
exports.Option = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Option = class Option extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ primaryKey: true, allowNull: false, unique: true }),
    __metadata("design:type", Number)
], Option.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false, unique: true }),
    __metadata("design:type", Number)
], Option.prototype, "questionID", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false, unique: true }),
    __metadata("design:type", Number)
], Option.prototype, "nextQuestionID", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    __metadata("design:type", String)
], Option.prototype, "answer", void 0);
Option = __decorate([
    sequelize_typescript_1.Table
], Option);
exports.Option = Option;
//# sourceMappingURL=option.entity.js.map