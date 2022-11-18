import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Coupon } from 'src/models/Coupon.entity';

@Injectable()
export class CouponRepository {
    constructor(
        @InjectRepository(Coupon)
        private readonly couponRepository: Repository<Coupon>,
    ) { }


    async findById(id: number): Promise<Coupon> {
        return await this.couponRepository.findOneBy({ id: id })
    }
}