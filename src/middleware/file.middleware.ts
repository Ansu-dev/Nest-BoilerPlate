import { Logger } from '@nestjs/common';
import multerS3 from 'multer-s3'
import AWS from 'aws-sdk'
import { s3FileName } from 'src/utils/s3FileName'
import dotenv from 'dotenv'
import { awsConfig } from 'src/config/aws.config';
dotenv.config()

const webuddingtStorage = multerS3({
    s3: new AWS.S3(awsConfig),
    bucket: process.env.AWS_BUCKET,
    contentType: (_: any, file: any, cb: (arg0: any, arg1: string) => void) => {
        let contentType = 'image/png'
        cb(null, contentType)
    },
    acl: 'private',
    metadata: (_: any, file: { fieldname: any; }, cb: (arg0: any, arg1: { fileName: any; }) => void) => {
        cb(null, { fileName: file.fieldname })
    },
    key: (_: any, file: { fieldname: string; }, cb: (arg0: any, arg1: string) => void) => {
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



export const fileUpload = { storage: webuddingtStorage, limits: { fieldSize: 2 * 1024 * 1024 * 1024, fileSize: 2 * 1024 * 1024 * 1024 } }




export const s3Delete = (param: AWS.S3.DeleteObjectRequest) => new AWS.S3(awsConfig).deleteObject(param, (err, data) => {
    if (err) Logger.log('S3 - Delete Fail' + err)
    else Logger.log('S3 - Delete Success')
})
