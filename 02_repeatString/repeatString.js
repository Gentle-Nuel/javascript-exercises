const repeatString = function (string, number) {
    /* function randomNumber(maxValue) {
        let num = Math.floor(Math.random() * maxValue) + 1;
        return num;
    } */
    
    if (number < 0) {
        return 'ERROR';
    }

    let result = '';
    for (let i = 0; i < number; i++) {
        result += string;
    }
    return result;
    
}

console.log(repeatString('', 10));

// Do not edit below this line
module.exports = repeatString;
