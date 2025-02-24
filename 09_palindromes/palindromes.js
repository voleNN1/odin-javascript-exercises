const palindromes = function (text) {
    let strippedText = text.replace(/[^a-zA-Z0-9]/g, '');
    let lowerCaseText = strippedText.toLowerCase();
    let reverseText = lowerCaseText.split("").reverse().join("");
    if (lowerCaseText == reverseText) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
