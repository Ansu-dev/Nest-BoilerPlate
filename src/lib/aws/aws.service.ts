import { Injectable } from "@nestjs/common";
import multerS3 from 'multer-s3'
import { s3FileName } from "src/utils/s3FileName";
import { awsConfig } from "src/config/aws.config";
import { S3Client } from '@aws-sdk/client-s3'

@Injectable()
export class AwsService {


    async upload(): Promise<any> {
        const storage = multerS3({
            s3: new S3Client({
                credentials: awsConfig
            }),
            bucket: process.env.AWS_BUCKET,
            contentType: (_, _file, cb) => {
                let contentType = 'image/png'
                cb(null, contentType)
            },
            acl: 'private',
            metadata: (_, file, cb) => {
                cb(null, { fileName: file.fieldname })
            },
            key: (_, file, cb) => {
                let filename = s3FileName(file)
                let location = ''
                if (file.fieldname == 'profile') {
                    location = `public/user/info/${filename}`
                } else if (file.fieldname == 'support') {
                    location = `private/user/support/${filename}`
                } else if (file.fieldname == 'review') {
                    location = `public/product/review/${filename}`
                } else if (file.fieldname === 'web' || file.fieldname === 'mobile') {
                    location = `public/product/group/${filename}`
                }
                cb(null, location)
            }
        })
        return {
            storage: storage,
            limits: {
                fieldSize: 2 * 1024 * 1024 * 1024,
                fileSize: 2 * 1024 * 1024 * 1024
            }
        }
    }
}