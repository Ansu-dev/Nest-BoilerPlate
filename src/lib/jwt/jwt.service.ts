import { Injectable } from "@nestjs/common";
import jwt from 'jsonwebtoken'

@Injectable()
export class JwtService {
    private readonly jwtSecret: string
    constructor() {
        this.jwtSecret = process.env.JWT_SECERET
    }

    getToken(userId: number) {
        const accessToken: string = jwt.sign({ userId: userId }, this.jwtSecret, { expiresIn: '1d' })
        const refreshToken: string = jwt.sign({ userId: userId }, this.jwtSecret, { expiresIn: '7d' })
        return { accessToken, refreshToken }
    }
}