const sumAll = function(num1, num2) {

    let sum;
    let min, max;

    // Error throwing for negative or non-number values
    if (typeof(num1) !== "number" || typeof(num2) !== "number") {
        return "ERROR";
    }

    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    // Check for the max and min values in case the first num is a large number
    if (num1 > num2) {
        max = num1;
        min = num2;
    } else {
        max = num2;
        min = num1;
    }

    sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
