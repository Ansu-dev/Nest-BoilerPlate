import { DynamicModule, Global, Module } from "@nestjs/common";
import { RefreshTokenStrategy } from './strategies/refreshToken.strategy';
import { AccessTokenStrategy } from './strategies/accessToken.strategy';
import { JwtService } from "./jwt.service";

@Global()
@Module({})
export class JwtModule {
    static forRoot(): DynamicModule {
        return {
            module: JwtModule,
            providers: [
                JwtService,
                AccessTokenStrategy,
                RefreshTokenStrategy
            ],
            exports: [JwtService],
        }
    }
}