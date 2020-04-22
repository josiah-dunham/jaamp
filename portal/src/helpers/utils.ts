export const logr = (logValue: any) => {
    console.log(logValue)
}

export const toRawType = (value: any) => {
    const toString = Object.prototype.toString

    const str = toString.call(value)
    return str.slice(8, -1)
}