/* ================================
   Problem 3
   Write a function called count_vowels().
   It should take a string as a parameter.
   Count and return the number of vowels (a, e, i, o, u) in the string.
=============================== */

const sentence = "Hello World! This is JavaScript fun.";

function count_vowels(sentence) {
    let count = 0;
    for (const str of sentence) {
        if (
          str.toLowerCase() === "a" ||
          str.toLowerCase() === "e" ||
          str.toLowerCase() === "i" ||
          str.toLowerCase() === "o" ||
          str.toLowerCase() === "u"
        ) {
          count++;
        }
    }
    return count;
}

console.log(count_vowels(sentence));
