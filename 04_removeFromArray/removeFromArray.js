const removeFromArray = function(arr, ...args) {
let newArray = Array.from(arr).filter(element =>!args.includes(element));
return newArray;
};

console.log([1, 2, 3], "1", 3);

// Do not edit below this line
module.exports = removeFromArray;
