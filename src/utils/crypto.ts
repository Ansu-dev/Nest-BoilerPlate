import { createHash, createCipheriv, createDecipheriv } from 'crypto'

export const GenDigestPwd = (password: string) => {
    let digestPwd = createHash('sha512').update(password).digest('hex')
    digestPwd = createHash('sha512').update(digestPwd).digest('hex')
    digestPwd = createHash('sha512').update(digestPwd).digest('hex')
    return digestPwd
}

// export const aesEncrypt = (str: string) => {
//     if (str === "" || str == null) {
//         return ""
//     }
//     else {
//         const key = process.env.aes_key
//         const iv = process.env.aes_iv
//         const cipher = createCipheriv('aes-128-cbc', key, iv);
//         let crpto = cipher.update(str, 'utf8', 'base64') + cipher.final('base64');;
//         let crptostr = crpto.toString();
//         return crptostr;
//     }
// }

// export const aesDencrypt = (str: string) => {
//     if (str === "" || str == null) {
//         return ""
//     }
//     else {
//         const key = process.env.AES_KEY
//         const iv = process.env.AES_IV
//         const cipher = createDecipheriv('aes-128-cbc', key, iv);
//         let crpto = cipher.update(str, 'base64', 'utf8') + cipher.final('utf8');
//         let decrptostr = crpto.toString();
//         return decrptostr;
//     }
// }