/* 
Task-4: 
Write a function to find the longest word in a given string.

Sample Input:
"I am learning Programming to become a programmer"

Sample Output:
Programming
*/

const sentence = "I am learning Programming to become a programmer";

function longestWord(str) {
    let longWord = '';
    let newArr = str.split(' ');
    for (const arr of newArr){
        if (arr.length > longWord.length) {
            longWord = arr;
        }   
    }
    return longWord;

}


console.log(longestWord(sentence));