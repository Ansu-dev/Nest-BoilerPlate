import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Currency } from "src/models/enum/enum";
import { User } from "src/models/User.entity";
import { UserAccount } from "src/models/UserAccount.entity";
import { UserGroupUser } from "src/models/UserGroup-User.entity";
import { UserGroup } from "src/models/UserGroup.entity";
import { UserMail } from "src/models/UserMail.entity";
import { UserSetting } from "src/models/UserSetting.entity";
import { RegistUserReqDto } from "src/modules/user/dto/req/create.dto";
import { GenDigestPwd } from "src/utils/crypto";
import { generateRandomString } from "src/utils/generateRandom";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(User)
        private user: Repository<User>,
    ) { }

    async insertUser(body: RegistUserReqDto): Promise<any> {
        const global: boolean = JSON.parse(body.isGlobal)
        const user = this.user.create()
        user.email = body.email
        user.password = GenDigestPwd(body.password)
        user.name = body.name
        user.phone = body.phone
        user.birth = body.birth
        user.gender = body.gender
        user.userCode = generateRandomString()
        user.myPoint = global ? 2 : 2000
        user.currency = global ? Currency.USD : Currency.KRW
        user.nationality = body.nationality
        user.setting = new UserSetting({
            agreeReceiveEmail: body.agreeReceiveEmail,
            agreeReceiveText: body.agreeReceiveText,
            agreeThirdParty: body.agreeThirdParty
        })
        user.mail = new UserMail({
            dormancy: false,
            withdrawal: false,
        })
        user.account.push(new UserAccount({
            type: body.type,
            accountId: ''
        }))
        user.userGroupUser.push(new UserGroupUser({
            userGroup: new UserGroup({ id: 1 })
        }))
        await this.user.save(user)
        return user
    }

    async findByEmail(email: string): Promise<User> {
        return await this.user.findOneBy({ email: email })
    }

    async findById(id: number): Promise<User> {
        return await this.user.createQueryBuilder('u')
            .innerJoinAndSelect('u.setting', 'us')
            .leftJoinAndSelect('u.account', 'ua')
            .where('u.id = :id', { id: id })
            .getOne()
    }

    async findByAny(key: string | number, value: string | number): Promise<User> {
        return await this.user.createQueryBuilder('u')
            .innerJoinAndSelect('u.setting', 'us')
            .leftJoinAndSelect('u.account', 'ua')
            .where(`u.${key} = :${key}`, { key: value })
            .getOne()
    }

    async save(user: User): Promise<any> {
        return await this.user.save(user)
    }
}
