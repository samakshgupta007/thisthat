import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { OptionModule } from './domain/option/option.module';

@Module({
  imports: [
    OptionModule,
    JwtModule.register({
      secret: 'SECRET_VALUE',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
