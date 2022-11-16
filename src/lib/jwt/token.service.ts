import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";


@Injectable()
export class TokenService {
    constructor(
        private jwtService: JwtService
    ) { }

    async getToken(userId: number) {
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(
                {
                    userId: userId
                },
                {
                    secret: process.env.JWT_SECERET,
                    expiresIn: '1h'
                }
            ),
            this.jwtService.signAsync(
                {
                    userId: userId
                },
                {
                    secret: process.env.JWT_SECERT,
                    expiresIn: '7d'
                }
            )
        ])

        return { accessToken, refreshToken }
    }
}