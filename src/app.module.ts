import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TurnosModule } from './modules/turnos/turnos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SwaggerModule } from '@nestjs/swagger';

import { MSSQL_CONFIG } from './common/constants/constants';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...MSSQL_CONFIG,
    }),
    TurnosModule,
    SwaggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
