import { UserRepository } from '../../repositories/user.repository';
import { User } from '../../models/User.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtService } from 'src/lib/jwt/jwt.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService, UserRepository, JwtService]
})
export class AuthModule { }
