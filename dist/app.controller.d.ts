import { AppService } from './app.service';
import { Response } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    register(name: string, password: string): Promise<void>;
    login(name: string, password: string, response: Response): Promise<string>;
    logout(response: Response): Promise<string>;
    helloWorld(): string;
}
