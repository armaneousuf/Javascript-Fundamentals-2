/* Problem-03: FIFA Best Team Award
Function Name: bestTeam()

Create a function that:
- Takes two objects as input, each representing a football team
- Each object has properties: name (string), foul (number), cardY (number), cardR (number)
- Calculates total fouls: foul + cardY + cardR
- Returns the name of the team with fewer total fouls (more fair play)
- If totals are equal, return "Tie"

Challenge: If either input is not an object, return "Invalid"

Sample Input → Sample Output
{ name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
{ name: "Argentina", foul: 7, cardY: 0, cardR: 0 } → Brazil

{ name: "Germany", foul: 12, cardY: 0, cardR: 0 },
{ name: "Sweden", foul: 7, cardY: 4, cardR: 1 } → Tie
*/

function bestTeam(team1, team2) {
    if (typeof team1 !== 'object' || typeof team2 !== 'object') {
        return 'Invalid';
    } 

    const teamOneFouls = team1.foul + team1.cardY + team1.cardR;
    const teamTwoFouls = team2.foul + team2.cardY + team2.cardR;

    if (teamOneFouls === teamTwoFouls) {
        return 'Tie';
    } 

    if (teamOneFouls < teamTwoFouls) {
        return team1.name;
    } 
    else {
        return team2.name;
    }
    
}

const team1 = { name: "Brazil", foul: 5, cardY: 1, cardR: 0 };
const team2 = { name: "Argentina", foul: 7, cardY: 0, cardR: 0 };

console.log(bestTeam(team1, team2));

