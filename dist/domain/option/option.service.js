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
exports.OptionService = void 0;
const common_1 = require("@nestjs/common");
let OptionService = class OptionService {
    constructor(optionRepository) {
        this.optionRepository = optionRepository;
    }
    async findAll(questionID) {
        const where = {};
        if (questionID)
            where.questionID = Number(questionID);
        return this.optionRepository.findAll({ where });
    }
    async create(option) {
        return this.optionRepository.create({
            questionID: option.questionID,
            nextQuestionID: option.nextQuestionID,
            answer: option.answer,
        });
    }
    async update(option, id) {
        await this.optionRepository.update({
            questionID: option.questionID,
            nextQuestionID: option.nextQuestionID,
            answer: option.answer,
        }, { where: { id: Number(id) } });
        return 'Option Updated Successfully';
    }
    async deleteById(id) {
        const optionsDeleted = await this.optionRepository.destroy({ where: { id } });
        return optionsDeleted ? "Option Deleted Successfully" : "Failed to delete option. Please try again";
    }
};
OptionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('OPTION_REPOSITORY')),
    __metadata("design:paramtypes", [Object])
], OptionService);
exports.OptionService = OptionService;
//# sourceMappingURL=option.service.js.map