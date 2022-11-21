import { User } from '../../models/User.entity';
import { GenDigestPwd } from '../../utils/crypto';
import { UserRepository } from '../../repositories/user.repository';
import { Injectable } from '@nestjs/common';
import { EmailLoginDto } from './dto/auth.dto';
import { JwtService } from 'src/lib/jwt/jwt.service';
import { AccountStatus } from 'src/models/enum/enum';

@Injectable()
export class AuthService {
    constructor(
        private userRepository: UserRepository,
        private readonly jwtServcie: JwtService
    ) { }

    async signInByEmail(body: EmailLoginDto): Promise<any> {
        try {
            const { email, password } = body
            //Check if user exist
            const user: User = await this.userRepository.findByEmail(email)
            let status: number = 0
            let resultCode: number = 0
            let data: any = null
            if (user) {
                if (user.accountStatus === AccountStatus.enable) {
                    const hashPassword = GenDigestPwd(password)
                    if (user.password === hashPassword) {
                        data = this.jwtServcie.getToken(user.id)
                        user.lastLoginAt = new Date()
                        this.userRepository.save(user)
                        status = 200
                        resultCode = 1
                    } else {
                        status = 202
                        resultCode = 1002 //비밀번호 틀림
                    }
                } else {
                    status = 201
                    resultCode = 1001 // 탈퇴한 회원
                }

            } else {
                status = 203
                resultCode = 1003 //계정 없음
            }
            return { status: status, data: { resultCode: resultCode, data: data } }
        } catch (err) {
            console.log(err)
            return { status: 401, data: { resultCode: 1005, data: null } }
        }
    }
}
