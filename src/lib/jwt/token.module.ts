import { TokenService } from './token.service';
import { DynamicModule, Module } from "@nestjs/common";

@Module({})
export class TokenModule {
    static registerAsync(): DynamicModule {
        return {
            global: true,
            module: TokenModule,
            providers: [TokenService],
            exports: [TokenService]
        }
    }
}