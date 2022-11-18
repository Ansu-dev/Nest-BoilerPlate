import { Coupon } from './../../../../models/Coupon.entity';
import { ApiProperty } from "@nestjs/swagger"
import { AccountType, Gender } from "src/models/enum/enum"
import { User } from "src/models/User.entity"

export class RegistUserReqDto {
    @ApiProperty({ format: 'email' })
    email: string

    @ApiProperty()
    password: string

    @ApiProperty()
    name: string

    @ApiProperty({ type: 'enum', enum: Gender })
    gender: Gender

    @ApiProperty()
    phone: string

    @ApiProperty()
    birth: string

    @ApiProperty()
    nationality: string

    @ApiProperty({ type: 'enum', enum: AccountType })
    type: AccountType

    @ApiProperty()
    recommendCode: string

    @ApiProperty()
    agreeThirdParty: boolean

    @ApiProperty()
    agreeReceiveEmail: boolean

    @ApiProperty()
    agreeReceiveText: boolean

    @ApiProperty()
    isGlobal: string
}

export class PointCreateDto {
    @ApiProperty()
    point: number

    @ApiProperty()
    description: string

    @ApiProperty()
    giveMethod: string

    @ApiProperty()
    plus: boolean

    @ApiProperty()
    user: User
}


export class UserCouponCreateDto {
    @ApiProperty()
    coupon: Coupon

    @ApiProperty()
    user: User

    @ApiProperty()
    expire: Date
}