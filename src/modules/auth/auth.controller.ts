import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { EmailLoginDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }



    @Post('signIn')
    async signIn(@Body() body: EmailLoginDto) {
        return await this.authService.signInByEmail(body)
    }
}
