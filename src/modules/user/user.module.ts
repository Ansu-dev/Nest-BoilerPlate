import { Coupon } from 'src/models/Coupon.entity';
import { CouponRepository } from 'src/repositories/coupon.repository';
import { UserCoupon } from './../../models/UserCoupon.entity';
import { PointRepository } from './../../repositories/point.repository';
import { Point } from './../../models/Point.entity';
import { UserRepository } from './../../repositories/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from 'src/models/User.entity';
import { UserCouponRepository } from 'src/repositories/userCoupon.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User, Point, UserCoupon, Coupon])],
  controllers: [UserController],
  providers: [UserService, UserRepository, PointRepository, UserCouponRepository, CouponRepository]
})
export class UserModule { }
