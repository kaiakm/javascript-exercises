const reverseString = function(string) {
    let splitArray = string.split('');
    let reverseArray = splitArray.reverse();
    let joinArray = reverseArray.join('');

    return joinArray;

};

// Do not edit below this line
module.exports = reverseString;
