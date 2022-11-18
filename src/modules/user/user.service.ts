import { Injectable } from '@nestjs/common';
import { User } from 'src/models/User.entity';
import { PointRepository } from 'src/repositories/point.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { RegistUserReqDto } from './dto/req/create.dto';
import { getInfoObj } from './dto/res/info.res.dto';

@Injectable()
export class UserService {
    constructor(
        private userRepository: UserRepository,
        private pointRepository: PointRepository,
    ) { }



    async emailSignUp(body: RegistUserReqDto): Promise<any> {
        try {
            const user: User = await this.userRepository.insertUser(body)
            // if (user) {
                
            // }
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
