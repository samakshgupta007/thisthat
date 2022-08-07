import { Module } from '@nestjs/common';
import { OptionController } from './option.controller';
import { OptionService } from './option.service';
import { optionProviders } from './option.provider';
import { DatabaseModule } from '../../infrastructure/db/database.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      secret: 'SECRET_VALUE',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [OptionController],
  providers: [OptionService, ...optionProviders],
  exports: [OptionService],
})
export class OptionModule {}
