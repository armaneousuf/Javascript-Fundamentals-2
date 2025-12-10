function isStringEven(str) {
    if (str.length % 2 === 0) {
        return true;
    } else {
        return false
    }
}

// console.log(isStringEven("Lorem ipsum dolor sit amet"));

function doubleOrTriple(number) {
    return number % 2 === 0 ? number * 2 : number * 3;
}

console.log(doubleOrTriple(41));