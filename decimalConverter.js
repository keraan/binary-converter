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
console.log(sortDecimalArray(decimal))
