export const checkNull = (str) => {
    if (typeof str === undefined || str === null || str === "") return true
    else return false
}


export const maskingEmail = (email: string) => {
    let emailStr = email.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    let strLength: number = 0
    let result: string = null
    if (checkNull(email) || checkNull(emailStr)) {
        result = email
    } else {
        strLength = emailStr.toString().split('@')[0].length - 3
        result = email.toString().replace(new RegExp('.(?=.{0,' + strLength + '}@)', 'g'), '*').replace(/.{6}$/, "******");
    }
    return result
}


export const maskingName = (name: string) => {
    let originStr: string = name;
    let maskingStr: string = null;
    let strLength: number = 0;

    if (checkNull(originStr) == true) {
        return originStr;
    }

    strLength = originStr.length;

    if (strLength < 3) {
        maskingStr = originStr.replace(/(?<=.{1})./gi, "*");
    } else {
        maskingStr = originStr.replace(/(?<=.{2})./gi, "*");
    }

    return maskingStr;
}