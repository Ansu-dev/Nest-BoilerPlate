

export const currentDate = (digit: number) => {
    const date = new Date()
    const year = date.getFullYear()
    const month = ("0" + (1 + date.getMonth())).slice(-2)
    const day = ("0" + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);

    const max = 10 ** digit
    const min = 10 ** (digit - 1)
    const randomNum = Math.floor(Math.random() * (max - min) + min)
    return year + month + day + hours + minutes + seconds + randomNum
}

export const formatDate = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = ("0" + (1 + date.getMonth())).slice(-2)
    const day = ("0" + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
}


export const generateRandomCode = (digit: number) => {
    const max = 10 ** digit
    const min = 10 ** (digit - 1)
    return Math.floor(Math.random() * (max - min) + min)
}

export const dbDateFormatDate = (date: Date) => {
    const year = date.getFullYear()
    const month = ("0" + (1 + date.getMonth())).slice(-2)
    const day = ("0" + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
}

export const newItemDate = () => {
    let date: Date = new Date()
    let day: number = date.getDay()
    let thisDay: number = date.getDate() - day + (day === 0 ? -4 : 3)
    date.setDate(thisDay)
    let thisWednesday: Date = new Date(date.toISOString().substring(0, 10))
    thisWednesday.setHours(thisWednesday.getHours() + 18)
    let today: Date = new Date()

    let startDate: Date = null
    let endDate: Date = null
    today.setHours(today.getHours() + 9)
    if (today.getTime() >= thisWednesday.getTime()) {
        startDate = new Date(thisWednesday)
        startDate.setDate(startDate.getDate() - 7)
        endDate = new Date(thisWednesday)
        endDate.setSeconds(endDate.getSeconds() - 1)
    } else {
        startDate = new Date(thisWednesday)
        startDate.setDate(startDate.getDate() - 14)
        endDate = new Date(thisWednesday)
        endDate.setDate(endDate.getDate() - 7)
        endDate.setSeconds(endDate.getSeconds() - 1)
    }
    return { startDate, endDate }
}