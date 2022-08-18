
const convertednum = document.getElementById("converted-num")
const convertbtn = document.getElementById("convert-btn")
const convertednumber = document.getElementById("converted-number")
const decimalbtn = document.getElementById("decimal-btn")
const IPNum = document.getElementById("IPNum")
const IPbtn = document.getElementById("IP-btn")
const convertedIP = document.getElementById("convertedIP")

convertbtn.addEventListener("click", function() {
    document.getElementById("converted-num").innerText = 'Converted Number: ' + binaryToDecimal(binaryToArr(binary))
})

decimalbtn.addEventListener("click", function() {
    getDecimal(decimalValue)
    document.getElementById("converted-number").innerText = 'Converted Number: ' + sortDecimalArray(decimal)
    console.log(sortDecimalArray(decimal))
})

IPbtn.addEventListener('click', function() {
    console.log(convertIPToBinary(ipValue))
    convertedIP.innerText = 'Converted Number: ' + convertIPToBinary(ipValue)
})


let binary = ''
let decimalValue = ''
binary = binary.toString()

function getValue() {
    binary = document.getElementById("binaryNum").value
    decimalValue = document.getElementById("decimalNum").value
    ipValue = document.getElementById("IPNum").value
}

// Binary To Decimal Converter

function binaryToArr(binary) {
    let arr = Array.from(binary)
    return arr.map(x => parseInt(x))
}

function binaryToDecimal(binary) {
    let number = 0;
    let x = binary.length - 1;
    for (z = 0; z < binary.length; z++) {
        let multiplier =  2**x
        number += binary[z]*multiplier
        x--
    }
    return number
}


// Decimal to Binary Converter

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
    for (c = 0; c < arrLength; c++) {
        newArr += array.pop()
    }
    return newArr
}


// IPv4 To Binary

let decimal = []
let ipArr = []
let ipResult = ''

function getBinaryStr(number) {
    return sortDecimalArray(getDecimal(number))
}


function convertIPToBinary(ip) {
    ipResult = ''
    console.log(ip)
    for (i = 0; i < IPToArr(ip).length; i++) {
        if (IPToArr(ip)[i] > 255) {
            alert("IP cannot exceed 255!")
            exit
        }

        if (i < IPToArr(ip).length -1) {
            ipResult += getBinaryStr(ipArr[i])+ '.'
        } else {
            ipResult += getBinaryStr(ipArr[i])
        }
    }
    return ipResult
}

function IPToArr(ip) {
    ipArr = ip.split('.')
    return ipArr
}
