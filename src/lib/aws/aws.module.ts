import { DynamicModule, Global, Module } from "@nestjs/common";
import { AwsService } from "./aws.service";


@Global()
@Module({})
export class AwsModule {
    static registerAsync(): DynamicModule {
        return {
            module: AwsModule,
            providers: [
                AwsService,
            ],
            exports: [AwsService],
        }
    }
}