import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt'

type JwtPayload = {
    id: number;
}

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromHeader('user-auth'),
            secretOrKey: process.env.JWT_SECERET
        })
    }

    validate(payload: JwtPayload) {
        return payload;
    }
}