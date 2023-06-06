const sumAll = function (start, end) {
    if (typeof start !== 'number' || typeof end !== 'number')
        return 'ERROR';

    if (start < 0)
        return 'ERROR';
        
    /*     
    if (Number.isNaN(start) || Number.isNaN(end))
        return 'ERROR';

    if (Array.isArray(start) || Array.isArray(end))
        return 'ERROR' */

    let sum = 0;
    if (start > end) {
        for (let i = end; i <= start; i++) {
            sum += i;
        }
    }
    else {
        for (let i = start; i <= end; i++) {
            sum += i;
        }
    };
    return sum;
}

console.log(sumAll(10, "90"));

// Do not edit below this line
module.exports = sumAll;
