import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";


@Injectable()
export class TypeOrmConfigServcie implements TypeOrmOptionsFactory {
    constructor(
        private configService: ConfigService
    ) { }

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: this.configService.get('DB_HOST'),
            username: this.configService.get('DB_USERNAME'),
            password: this.configService.get('DB_PASSWORD'),
            port: 3306,
            database: this.configService.get('DB_DATABASE'),
            entities: [__dirname + '/models/*.entity{.ts,.js}'],
            synchronize: true,
            // autoLoadEntities: true,
        }
    }
}