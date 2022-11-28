import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repositories/user.repository';
import { RegistUserReqDto } from './dto/req/create.dto';

@Injectable()
export class UserService {
    constructor(
        private userRepository: UserRepository,
    ) { }



    async emailSignUp(files: File[], body: RegistUserReqDto): Promise<any> {
        try {
            
            return { status: 200, data: { resultCode: 1, data: null } }
        } catch (err) {
            console.log(err)
            return { status: 401, data: { resultCode: 1121, data: null } }
        }
    }
}
