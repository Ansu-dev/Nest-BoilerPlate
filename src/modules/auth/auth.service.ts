import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private configServcie: ConfigService
    ) { }

    async signIn(): Promise<any> {
        
    }
}
