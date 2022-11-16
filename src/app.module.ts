import { IndexModule } from './modules/index.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigServcie } from './database/config.service';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.prod'
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigServcie,
      inject: [ConfigService],
    }),
    IndexModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
