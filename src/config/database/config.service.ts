import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";


@Injectable()
export class TypeOrmConfigServcie implements TypeOrmOptionsFactory {
    constructor(
        private configService: ConfigService
    ) { }

    createTypeOrmOptions(): TypeOrmModuleOptions {
        console.log(this.configService.get('DB_DATABASE'))
        return {
            type: 'mysql',
            host: this.configService.get('DB_HOST'),
            username: this.configService.get('DB_USERNAME'),
            password: this.configService.get('DB_PASSWORD'),
            port: Number(this.configService.get('DB_PORT')),
            database: this.configService.get('DB_DATABASE'),
            entities: [__dirname + '/models/*.entity{.ts,.js}'],
            synchronize: JSON.parse(this.configService.get('DB_SYNC')),
            // autoLoadEntities: true,
        }
    }
}