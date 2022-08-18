
let ip = '255.255.255.255'
let ipArr = []
let ipBinary = []
let ipResult = ''
let decimal = []

function IPToArr(ip) {
    ipArr = ip.split('.')
    return ipArr
}

for (i = 0; i < IPToArr(ip).length; i++) {
    if (i < IPToArr(ip).length -1) {
        ipResult += getBinaryStr(ipArr[i])+ '.'
    } else {
        ipResult += getBinaryStr(ipArr[i])
    }
}

function getDecimal(number) {
    decimal = []
    if (number == 0) {
        decimal.push(0)
    }
    while (number > 0) {
        if (number % 2 == 0) {
            decimal.push(0)
            number = number / 2
        } else if (number % 2 == 1) {
            decimal.push(1)
            number--
            number = number / 2
        }
    }
    while (decimal.length < 8) {
        if (number == 0) {
            decimal.push(0)
        }
    }
    return decimal
}


function sortDecimalArray(array) {
    arrLength = array.length
    let newArr = ''
    for (z = 0; z < arrLength; z++) {
        newArr += array.pop()
    }
    return newArr
}

function getBinaryStr(number) {
    return sortDecimalArray(getDecimal(number))
}

function convertIPToBinary(ip) {
    ipResult = ''
    for (i = 0; i < IPToArr(ip).length; i++) {
        if (i < IPToArr(ip).length -1) {
            ipResult += getBinaryStr(ipArr[i])+ '.'
        } else {
            ipResult += getBinaryStr(ipArr[i])
        }
    }
    return ipResult
}

console.log(convertIPToBinary(ip))
