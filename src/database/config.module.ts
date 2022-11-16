import { Module } from "@nestjs/common";
import { TypeOrmConfigServcie } from "./config.service";

@Module({
    providers: [TypeOrmConfigServcie]
})
export class DatabaseConfigModule { }