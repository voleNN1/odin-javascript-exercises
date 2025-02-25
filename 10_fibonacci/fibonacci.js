const fibonacci = function(numToFind) {
    numToFind = parseInt(numToFind);
    if (numToFind < 0) {
        return "OOPS";
    }
    else if (numToFind <= 1) {
        return numToFind;
    }
    else {
        let finalNum = fibonacci(numToFind - 1) + fibonacci(numToFind - 2);

        return finalNum;
    }
};

// Do not edit below this line
module.exports = fibonacci;
