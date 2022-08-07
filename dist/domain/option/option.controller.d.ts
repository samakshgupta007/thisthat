import { OptionService } from './option.service';
import { Option } from './option.entity';
import { IOption } from './option.interface';
import { JwtService } from '@nestjs/jwt';
export declare class OptionController {
    private readonly optionService;
    private readonly jwtService;
    constructor(optionService: OptionService, jwtService: JwtService);
    private checkLoggedIn;
    getAllOptions(questionID: string): Promise<Option[]>;
    addOption(option: IOption): Promise<Option>;
    updateOption(option: Partial<IOption>, id: string): Promise<String>;
    deleteUser(id: number): Promise<string>;
}
