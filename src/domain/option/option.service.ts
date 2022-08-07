import { Injectable, Inject } from '@nestjs/common';
import { Option } from './option.entity';
import { IOption } from './option.interface';

@Injectable()
export class OptionService {
  constructor(
    @Inject('OPTION_REPOSITORY')
    private optionRepository: typeof Option,
  ) {}

  async findAll(questionID?: string): Promise<Option[]> {
    const where = {} as { questionID?: number };
    if(questionID) where.questionID = Number(questionID);

    return this.optionRepository.findAll<Option>({ where });
  }

  async create(option: IOption): Promise<Option> {
    return this.optionRepository.create<Option>({
      questionID: option.questionID,
      nextQuestionID: option.nextQuestionID,
      answer: option.answer,
    });
  }

  async update(option: Partial<IOption>, id: string): Promise<String> {
    await this.optionRepository.update({
      questionID: option.questionID,
      nextQuestionID: option.nextQuestionID,
      answer: option.answer,
    },
    { where: { id: Number(id) } });

    return 'Option Updated Successfully';
  }

  async deleteById(id: number): Promise<string> {
    const optionsDeleted = await this.optionRepository.destroy({ where: { id } });
    return optionsDeleted ? "Option Deleted Successfully" : "Failed to delete option. Please try again";
  }
}