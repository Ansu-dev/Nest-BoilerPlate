import { UserCoupon } from './../models/UserCoupon.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserCouponCreateDto } from "src/modules/user/dto/req/create.dto";
import { Repository } from "typeorm";
import { Coupon } from 'src/models/Coupon.entity';

@Injectable()
export class CouponRepository {
    constructor(
        @InjectRepository(UserCoupon)
        private readonly couponRepository: Repository<UserCoupon>,
    ) { }


    async create(body: UserCouponCreateDto): Promise<UserCoupon> {
        const userCoupon: UserCoupon = this.couponRepository.create()
        userCoupon.coupon = new Coupon({id: body.coupon.id})
        userCoupon.user = body.user
        userCoupon.expire = body.expire
        return userCoupon
    }
}