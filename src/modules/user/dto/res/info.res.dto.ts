import { ApiProperty } from "@nestjs/swagger";
import { UserAccount } from "src/models/UserAccount.entity";

export class getInfoObj {
    @ApiProperty({ format: 'email' })
    email: string

    @ApiProperty()
    name: string

    @ApiProperty()
    phone: string

    @ApiProperty()
    birth: string

    @ApiProperty()
    gender: string

    @ApiProperty()
    profile: string

    @ApiProperty()
    agreeThirdParty: boolean

    @ApiProperty()
    agreeReceiveEmail: boolean

    @ApiProperty()
    agreeReceiveText: boolean

    @ApiProperty()
    account: UserAccount[]

    @ApiProperty()
    userCode: string
}