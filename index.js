
const convertednum = document.getElementById("converted-num")
const convertbtn = document.getElementById("convert-btn")

convertbtn.addEventListener("click", function() {
    document.getElementById("converted-num").innerText = 'Converted Number: ' + binaryToDecimal(binaryToArr(binary))
    console.log(binaryToDecimal(binaryToArr('1101010100')))
})

let binary = ''
binary = binary.toString()

function getValue() {
    binary = document.getElementById("binaryNum").value
}

function binaryToArr(binary) {
    let arr = Array.from(binary)
    return arr.map(x => parseInt(x))
}

console.log(binaryToArr(binary))


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

console.log(binaryToDecimal(binaryToArr(binary)))