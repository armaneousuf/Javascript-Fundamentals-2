/* 
Task-2:
Find the friend with the smallest name.

Input:
const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

Goal:
Write a function that returns the name with the smallest length.
*/

function smallestInLength(friends) {
    // console.log(friends);
    let smallest = friends[0];
    for (const friend of friends) {
        // console.log(friend);
        if (friend.length < smallest.length) {
            smallest = friend;
        }
    }
    return smallest;
}

const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
console.log(smallestInLength(friends));