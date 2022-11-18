import multerS3 from 'multer-s3'
import { s3FileName } from 'src/utils/s3FileName'
import { awsConfig } from 'src/config/aws.config';
import { S3 } from '@aws-sdk/client-s3'

export const fileUpload = {
    storage: multerS3({
        s3: new S3({
            credentials: awsConfig
        }),
        bucket: 'webudding-dev',
        contentType: (_, file, cb) => {
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
            if (file.fieldname === 'profile') {
                location = `public/user/info/${filename}`
            } else if (file.fieldname === 'review') {
                location = `public/product/review/${filename}`
            } else if (file.fieldname === 'web' || file.fieldname === 'mobile') {
                location = `public/product/group/${filename}`
            }
            cb(null, location)
        }
    }),
    limits: {
        fieldSize: 2 * 1024 * 1024 * 1024,
        fileSize: 2 * 1024 * 1024 * 1024
    }
}
