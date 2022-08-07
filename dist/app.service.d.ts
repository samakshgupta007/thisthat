import { JwtService } from '@nestjs/jwt';
export declare class AppService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
}
