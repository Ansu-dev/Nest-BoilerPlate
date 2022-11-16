import { GenDigestPwd } from './../../utils/crypto';
import { UserRepository } from './../../repositories/user.repository';
import { Injectable } from '@nestjs/common';
import { EmailLoginDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
    constructor(
        private userRepository: UserRepository,
    ) { }

    async signInByEmail(body: EmailLoginDto): Promise<any> {
        const { email, password } = body
        //Check if user exist
        const user = await this.userRepository.findByEmail(email)
        let status: number = 0
        let resultCode: number = 0
        let data: any = null
        if (user) {
            const hashPassword = GenDigestPwd(password)
            if (user.password === hashPassword) {

            }
        } else {

        }
        return { status: status, data: { resultCode: resultCode, data: data } }
    }
}
