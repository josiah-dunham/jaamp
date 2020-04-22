export const logr = (logValue: any) => {
    console.log(logValue)
}

export const toRawType = (value: any) => {
    const toString = Object.prototype.toString

    const str = toString.call(value)
    return str.slice(8, -1)
}

const getRawType = (d) => (v) => d === toRawType(v)

const isObject = getRawType("Object")
const isArray = getRawType("Array")
const isNumber = getRawType("Number")
const isString = getRawType("String")
const isBoolean = getRawType("Boolean")
const isNull = getRawType("Null")
const isUndefined = getRawType("Undefined")

const hasValue = (v) => !(isNull(v) || isUndefined(v))

export const typeChecks = {
    isObject,
    isArray,
    isNumber,
    isString,
    isBoolean,
    isNull,
    isUndefined,
    hasValue
}


