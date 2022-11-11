import { Body, Controller, Post } from '@nestjs/common';
import { EmailLoginDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {




    @Post('signIn')
    async signIn(@Body() body: EmailLoginDto) {
        
    }
}
