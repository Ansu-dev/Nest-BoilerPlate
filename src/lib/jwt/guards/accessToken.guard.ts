import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class AccessTokenGuard extends AuthGuard('jwt') {
    handleRequest(err: any, user: any) {
        // You can throw an exception based on either "info" or "err" arguments
        if (err || !user) {
            throw new UnauthorizedException({
                status: 403,
                data: { resultCode: -30, data: null }
            })
        } else {
            return user;
        }
    }
}