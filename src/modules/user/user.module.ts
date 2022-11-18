import { PointRepository } from './../../repositories/point.repository';
import { Point } from './../../models/Point.entity';
import { UserRepository } from './../../repositories/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from 'src/models/User.entity';


@Module({
  imports: [TypeOrmModule.forFeature([User, Point])],
  controllers: [UserController],
  providers: [UserService, UserRepository, PointRepository]
})
export class UserModule { }
