import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { createWriteStream } from 'fs';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { formatDate } from 'src/utils/date';

const logStream = createWriteStream('logs/api.log', { flags: 'a' })


@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const { method, url } = context.getArgByIndex(0);
        Logger.log(`[${formatDate()}] Request to ${method} ${url}`);
        logStream.write(`[${formatDate()}] Request to ${method} ${url}`)

        return next
            .handle()
            .pipe(
                tap(data => logStream.write(`[${formatDate()}] Response from ${method} ${url} \n response: ${JSON.stringify(data)}`))
            );
    }
}