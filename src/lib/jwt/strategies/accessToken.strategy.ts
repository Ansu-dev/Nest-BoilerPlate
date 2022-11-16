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
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECERET
        })
    }

    validate(payload: JwtPayload) {
        return payload;
    }
}