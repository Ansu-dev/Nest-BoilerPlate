import { UserRepository } from '../../repositories/user.repository';
import { User } from '../../models/User.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtService } from 'src/lib/jwt/jwt.service';
import { AccessTokenStrategy } from 'src/lib/jwt/strategies/accessToken.strategy';
import { RefreshTokenStrategy } from 'src/lib/jwt/strategies/refreshToken.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService, UserRepository, JwtService, AccessTokenStrategy, RefreshTokenStrategy]
})
export class AuthModule { }
