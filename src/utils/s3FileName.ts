import * as path from 'path'
import { v4 } from 'uuid'

export const s3FileName = (file: any): string => {
    let date = new Date()
    let year = date.getFullYear();
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let today = (year + month + day + hours + minutes + seconds);
    let uuid = v4(file.originalname);
    let ext = path.extname(file.originalname)
    let filename = today + '-' + path.basename(uuid, ext) + ext
    return filename
}