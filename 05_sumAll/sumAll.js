const sumAll = function(firstInt, secondInt) {
    let finalInt = 0;

    if (firstInt < 0 || secondInt < 0) {
        finalInt = "ERROR";
    }
    else if (firstInt % 1 !== 0 || secondInt % 1 !== 0) {
        finalInt = "ERROR";
    }
    else if (Number.isInteger(firstInt) != true || Number.isInteger(secondInt) != true) {
        finalInt = "ERROR";
    }
    else if (firstInt < secondInt) {
        for (i = firstInt; i <= secondInt; i++) {
            finalInt = finalInt + i;
        }
    }
    else if (firstInt > secondInt) {
        for (i = secondInt; i <= firstInt; i++) {
            finalInt = finalInt + i;
        }
    }


    return finalInt;
};

// Do not edit below this line
module.exports = sumAll;
