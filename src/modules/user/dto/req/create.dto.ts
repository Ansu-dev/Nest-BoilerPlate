import { ApiProperty } from "@nestjs/swagger"
import { User } from "src/models/User.entity"

export class RegistUserReqDto {
    @ApiProperty({ format: 'email' })
    email: string

    @ApiProperty()
    password: string

    @ApiProperty()
    name: string

    @ApiProperty()
    gender: string

    @ApiProperty()
    phone: string

    @ApiProperty()
    birth: string

    @ApiProperty()
    profile?: string
}