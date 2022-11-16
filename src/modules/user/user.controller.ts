import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { AccessTokenGuard } from '../../lib/jwt/guards/accessToken.guard';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) { }


    @UseGuards(AccessTokenGuard)
    @Get('info')
    async getInfo(@Req() req: Request) {
        return this.userService.getInfo(req.user['userId'])
    }
}
