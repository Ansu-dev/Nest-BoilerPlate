import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/models/User.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(User)
        private user: Repository<User>
    ) { }

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
}