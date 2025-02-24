const palindromes = function (text) {
    let strippedText = text.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
    console.log(strippedText);
    if (strippedText === reverseText(text)) {
        return true;
    }
    else {
        return false;
    }
};

function reverseText(text) {
    let lowercaseText = text.toLowerCase();
    return lowercaseText.split("").reverse().join("");
}

palindromes("!racecar");

// Do not edit below this line
module.exports = palindromes;
