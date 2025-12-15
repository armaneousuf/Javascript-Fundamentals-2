/* Problem-02: Clean & Capitalize Characters
Function Name: onlyCharacter()

Create a function that:
- Takes a string input
- Removes all spaces
- Converts all characters to uppercase
- Returns the result

Challenge: If input is not a string, return "Invalid"

Sample Input → Sample Output
"  h e llo wor   ld" → HELLOWORLD
"Cy   bar- At  tac k  " → CYBAR-ATTACK
["hack", "me"] → Invalid
true → Invalid
*/

function onlyCharacter(str) {
    if (typeof str !== 'string') {
        return 'Invalid';
    }
    return str.toUpperCase().split(' ').join('');
    
}
console.log(onlyCharacter('Cy bar- at'));
console.log(onlyCharacter(37));