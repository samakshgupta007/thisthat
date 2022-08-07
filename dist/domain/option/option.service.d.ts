import { Option } from './option.entity';
import { IOption } from './option.interface';
export declare class OptionService {
    private optionRepository;
    constructor(optionRepository: typeof Option);
    findAll(questionID?: string): Promise<Option[]>;
    create(option: IOption): Promise<Option>;
    update(option: Partial<IOption>, id: string): Promise<String>;
    deleteById(id: number): Promise<string>;
}
