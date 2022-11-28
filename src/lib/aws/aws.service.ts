import { Injectable } from "@nestjs/common";
import multerS3 from 'multer-s3'
import { s3FileName } from "src/utils/s3FileName";
import { awsConfig } from "src/config/aws.config";
import { S3Client } from '@aws-sdk/client-s3'

@Injectable()
export class AwsService {


}