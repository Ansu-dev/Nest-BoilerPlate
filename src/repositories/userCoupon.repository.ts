import { UserCoupon } from '../models/UserCoupon.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserCouponCreateDto } from "src/modules/user/dto/req/create.dto";
import { Repository } from "typeorm";

@Injectable()
export class UserCouponRepository {
    constructor(
        @InjectRepository(UserCoupon)
        private readonly couponRepository: Repository<UserCoupon>,
    ) { }


    async create(body: UserCouponCreateDto): Promise<UserCoupon> {
        const userCoupon: UserCoupon = this.couponRepository.create()
        userCoupon.coupon = body.coupon
        userCoupon.user = body.user
        userCoupon.expire = body.expire
        return this.couponRepository.save(userCoupon)
    }
}