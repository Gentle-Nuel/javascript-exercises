const reverseString = function(str) {
let reversed = str.split('').reverse().join('');
return reversed
};

console.log(reverseString('hello'));
// Do not edit below this line
module.exports = reverseString;
