import { Body, Controller, Get, Post, Req, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { AccessTokenGuard } from '../../lib/jwt/guards/accessToken.guard';
import { RegistUserReqDto } from './dto/req/create.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileUpload } from 'src/interceptors/file-upload.interceptor';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }

    @UseInterceptors(
        FileInterceptor('profile', fileUpload)
    )
    @Post('regist')
    async emailSignUp(@UploadedFiles() files: File[], @Body() body: RegistUserReqDto) {
        return this.userService.emailSignUp(files, body)
    }



    @UseGuards(AccessTokenGuard)
    @Get('info')
    async getInfo(@Req() req: Request) {
        return this.userService.getInfo(req.user['userId'])
    }
}
