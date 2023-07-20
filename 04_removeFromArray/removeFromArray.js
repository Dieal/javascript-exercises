const removeFromArray = function(array, ...args) {

    let index = 0;
    args.forEach(value => {
        index = array.indexOf(value)
        if (index > -1) {
            array.splice(index, 1);
        }
    })

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
