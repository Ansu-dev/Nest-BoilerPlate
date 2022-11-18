import { Injectable } from '@nestjs/common';
import { User } from 'src/models/User.entity';
import { UserCouponRepository } from 'src/repositories/userCoupon.repository';
import { PointRepository } from 'src/repositories/point.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { RegistUserReqDto } from './dto/req/create.dto';
import { getInfoObj } from './dto/res/info.res.dto';
import { CouponRepository } from 'src/repositories/coupon.repository';
import { Currency } from 'src/models/enum/enum';

@Injectable()
export class UserService {
    constructor(
        private userRepository: UserRepository,
        private pointRepository: PointRepository,
        private userCouponRepository: UserCouponRepository,
        private couponRepository: CouponRepository
    ) { }



    async emailSignUp(files: File[], body: RegistUserReqDto): Promise<any> {
        try {
            const isGlobal = JSON.parse(body.isGlobal)
            if (files['profile']) body.profile = files['profile'][0].key
            const user: User = await this.userRepository.create(body)
            if (user) {
                let expire: Date = new Date(user.createdAt)
                expire.setDate(expire.getDate() + 15)
                await this.userCouponRepository.create({
                    user: user,
                    expire: expire,
                    coupon: await this.couponRepository.findById(7)
                })
                await this.pointRepository.create({
                    point: 2000,
                    description: isGlobal ? 'Webudding Referral code' : '위버딩 추천인 코드',
                    giveMethod: isGlobal ? 'auto' : '자동 지급',
                    user: user,
                    plus: true
                })
                if (body.recommendCode !== '') {
                    //추천한 사람
                    user.myPoint += isGlobal ? 1 : 1000
                    await this.userRepository.save(user)

                    await this.pointRepository.create({
                        plus: true,
                        point: isGlobal ? 1 : 1000,
                        description: isGlobal ? 'Webudding Referral code' : '위버딩 추천인 코드',
                        giveMethod: isGlobal ? 'auto' : '자동 지급',
                        user: user
                    })

                    //추천 받은 사람
                    const recommendUser: User = await this.userRepository.findByAny('userCode', body.recommendCode)
                    recommendUser.myPoint += isGlobal ? 1 : 1000
                    await this.userRepository.save(recommendUser)

                    await this.pointRepository.create({
                        plus: true,
                        point: recommendUser.currency === Currency.USD ? 1 : 1000,
                        description: recommendUser.currency === Currency.USD ? 'Webudding Referral code' : '위버딩 추천인 코드',
                        giveMethod: recommendUser.currency === Currency.USD ? 'auto' : '자동 지급',
                        user: recommendUser
                    })
                }
            }
            return { status: 200, data: { resultCode: 1, data: null } }
        } catch (err) {
            console.log(err)
            return { status: 401, data: { resultCode: 1121, data: null } }
        }
    }

    async getInfo(userId: number): Promise<any> {
        try {
            const user: User = await this.userRepository.findById(userId)
            let data: getInfoObj = {
                email: user.email,
                name: user.name,
                phone: user.phone,
                gender: user.gender,
                birth: user.birth,
                profile: user.profile,
                agreeThirdParty: user.setting.agreeThirdParty,
                agreeReceiveEmail: user.setting.agreeReceiveEmail,
                agreeReceiveText: user.setting.agreeReceiveText,
                account: user.account,
                userCode: user.userCode
            }
            return { status: 200, data: { resultCode: 1, data: data } }
        } catch (err) {
            console.log(err)
            return { status: 401, data: { resultCode: 1101, data: null } }
        }
    }
}
