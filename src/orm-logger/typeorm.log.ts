import { formatDate } from 'src/utils/date';
import { Logger as TypeOrmLogger, QueryRunner } from "typeorm"
import { createWriteStream } from 'fs'

const logStream = createWriteStream('logs/typeorm.log', { flags: 'a' })


export class CustomLogger implements TypeOrmLogger {
    logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner) {
        let allowLog = ["START", "INSERT", "UPDATE", "DELETE", "COMMIT", "ALTER", "DROP", "CREATE"]
        let queryFirst: string = query.split(" ")[0]
        if (allowLog.includes(queryFirst)) {
            let date: string = formatDate()
            logStream.write(`[${date}]${query} ${parameters === undefined ? '' : '[ ' + parameters + ' ]'}\n`)
        }
    }
    logQueryError(error: string | Error, query: string, parameters?: any[], queryRunner?: QueryRunner) {
    }
    logQuerySlow(time: number, query: string, parameters?: any[], queryRunner?: QueryRunner) {
    }
    logSchemaBuild(message: string, queryRunner?: QueryRunner) {
    }
    logMigration(message: string, queryRunner?: QueryRunner) {
    }
    log(level: "log" | "info" | "warn", message: any, queryRunner?: QueryRunner) {
    }
}