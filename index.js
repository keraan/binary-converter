const binaryNum =document.getElementById("binaryNum") 
const binarybtn = document.getElementById("binary-btn")
const convertedBinary = document.getElementById("converted-binary")

const decimalNum = document.getElementById("decimalNum")
const decimalbtn = document.getElementById("decimal-btn")
const convertedDecimal = document.getElementById("converted-decimal")

const IPNum = document.getElementById("IPNum")
const IPbtn = document.getElementById("IP-btn")
const convertedIP = document.getElementById("converted-IP")


// Listeners 
binarybtn.addEventListener("click", function() {
    convertedBinary.innerText = getDecimalStr(binary)
})

binaryNum.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        binarybtn.click()
    }
})

decimalbtn.addEventListener("click", function() {
    convertedDecimal.innerText = getBinaryStr(decimalValue)
})

decimalNum.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        decimalbtn.click()
    }
})

IPbtn.addEventListener('click', function() {
    convertedIP.innerText = convertIPToBinary(ipValue)
})

IPNum.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        IPbtn.click()
    }
})


function getValue() {
    binary = binaryNum.value
    decimalValue = decimalNum.value
    ipValue = IPNum.value
}

// Binary To Decimal Converter
let binary = ''

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

function getDecimalStr(binary) {
    return binaryToDecimal(binaryToArr(binary))
}

// Decimal to Binary Converter
let decimalValue = ''

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


// Copy To Clipboard
function copyToClipboard(id) {
    var copyText = document.getElementById(id).innerText;
    navigator.clipboard.writeText(copyText).then(() => {
        alert('Copied to Clipboard!')
        document.getElementById('copiedToClipboard').textContent = 'Copied to Clipboard!'
    });
  }
