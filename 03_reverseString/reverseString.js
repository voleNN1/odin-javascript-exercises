const reverseString = function(word) {
    let wordString = "";
    wordString = word;
    let wordArray = wordString.split("");
    wordArray.reverse();
    let finalString = wordArray.join("");

    return finalString;
};


// Do not edit below this line
module.exports = reverseString;
