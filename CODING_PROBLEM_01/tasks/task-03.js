/* 
Task-3: 
Write a function to count the number of vowels in a countVowelsing.

Vowels: a, e, i, o, u (both uppercase and lowercase)

Sample Input:
"I am learning Programming"

Sample Output:
8
*/

function countRepetedNums(countVowels) {
    let count = 0;
    for (const countVowelsing of countVowels.toLowerCase()) {
        if (countVowelsing === 'a' || countVowelsing === 'e' || countVowelsing === 'i' || countVowelsing === 'o' || countVowelsing === 'u') {
            count++;
        }
    }
    return count;
}

const sentence = "I am learning Programming";
console.log(countRepetedNums(sentence));






