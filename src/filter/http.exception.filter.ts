import { ArgumentsHost, Catch, ExceptionFilter, HttpException, InternalServerErrorException } from "@nestjs/common";
import { Request, Response } from 'express'


// ! UseFilters 사용 방법 설계 필요
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const res = ctx.getResponse<Response>();
        const req = ctx.getRequest<Request>();

        if (!(exception instanceof HttpException)) {
            exception = new InternalServerErrorException();
        }

        // * response에 기존 형식처럼 되야함 ex) resultCode, data
        const response = (exception as HttpException).getResponse();

        const log = {
            timestamp: new Date(),
            url: req.url,
            response,
        }

        console.log(log);

        res
            .status((exception as HttpException).getStatus())
            .json(response);
    }
}