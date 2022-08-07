import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Query,
  Delete,
  Body,
  Req,
  UnauthorizedException,
  ValidationPipe,
} from '@nestjs/common';
import { OptionService } from './option.service';
import { Option } from './option.entity';
import { IOption } from './option.interface';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Controller('/option')
export class OptionController {
  constructor(
    private readonly optionService: OptionService,
    private readonly jwtService: JwtService,
  ) {}


  // Can implement this method by creating an AuthGuard to validate the JWT and injecting it in endpoints which only authorised users can access
  private async checkLoggedIn(request: Request): Promise<void> {
    try {
      const cookie = request.cookies['token'];
      const data = await this.jwtService.verifyAsync(cookie);

      if (!data) throw new UnauthorizedException('Unauthorized.');
    } catch {
      throw new UnauthorizedException('Unauthorized.');
    }
  }

  @Get('/')
  // Can be used to fetch all options or the options for an individual question by passing the questionID as a query parameter
  async getAllOptions(@Query('questionID') questionID: string,): Promise<Option[]> {
    return this.optionService.findAll(questionID);
  }

  @Post('/')
  async addOption(
    @Body(ValidationPipe) option: IOption,
  ): Promise<Option> {
    return this.optionService.create(option);
  }

  @Patch('/:id')
  async updateOption(
    @Body(ValidationPipe) option: Partial<IOption>,
    @Param('id') id: string,
  ): Promise<String> {
    return this.optionService.update(option, id);
  }

  @Delete('/:id')
  async deleteUser(
    @Param('id') id: number,
  ): Promise<string> {
    return this.optionService.deleteById(id);
  }
}
