
const convertednum = document.getElementById("converted-num")
const convertbtn = document.getElementById("convert-btn")
const convertednumber = document.getElementById("converted-number")
const decimalbtn = document.getElementById("decimal-btn")

convertbtn.addEventListener("click", function() {
    document.getElementById("converted-num").innerText = 'Converted Number: ' + binaryToDecimal(binaryToArr(binary))
})

decimalbtn.addEventListener("click", function() {
    getDecimal(decimalValue)
    document.getElementById("converted-number").innerText = 'Converted Number: ' + sortDecimalArray(decimal)
    console.log(sortDecimalArray(decimal))
})


let binary = ''
let decimalValue = ''
binary = binary.toString()

function getValue() {
    binary = document.getElementById("binaryNum").value
    decimalValue = document.getElementById("decimalNum").value
}

// Binary To Decimal Converter

function binaryToArr(binary) {
    let arr = Array.from(binary)
    return arr.map(x => parseInt(x))
}

function binaryToDecimal(binary) {
    let number = 0;
    let x = binary.length - 1;
    for (i = 0; i < binary.length; i++) {
        let multiplier =  2**x
        number += binary[i]*multiplier
        x--
    }
    return number
}


// Decimal to Binary Converter

let decimal = []

function getDecimal(number) {
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
}

function sortDecimalArray(array) {
    arrLength = array.length
    let newArr = ''
    for (i = 0; i < arrLength; i++) {
        newArr += array.pop()
    }
    return newArr
}

