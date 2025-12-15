/* =========================================
   Problem-04: Same Same But Different
   =========================================
You need to create a function named isSame() that takes two arrays as input and checks if they are exactly the same.

Two arrays are considered the same if:
1. They have the same length.
2. Each element at the same index is exactly equal (===).

Input: Two arrays (can contain any primitive types)
Output: 
- true if arrays are the same
- false if arrays are different
- "Invalid" if either input is not an array

SAMPLE INPUT / OUTPUT
[1, 2, 3], [1, 2, 3] -> true
[34, 5, 7, 9], [34, 5, 7] -> false
[1, undefined, 3], [1, null, 3] -> false
[1, 4, 5], [1, 4, 5] -> true
[1, "4", 4], [1, 4, 4] -> false
[2, 5, 6], 256 -> Invalid
{data: [2, 5, 6]}, [2, 5, 6] -> Invalid
*/

function isSame(arr1, arr2) {
   // Check if both arrays are same or not
   if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
      return 'Invalid'
   } 
   if (arr1.length !== arr2.length) {
      return false;
      // return {
      //    length1: arr1.length,
      //    length2: arr2.length
      // }
   } 
   for (let i = 0; i < arr1.length; i++){
      if (arr1[i] !== arr2[i]) {
         return false;
      }
   }
   return true;
}

console.log(isSame([1, 2, 3], [1, 2, 3]));
console.log(isSame([34, 5, 7, 9], [34, 5, 7]));
console.log(isSame([1, undefined, 3], [1, null, 3]));
console.log(isSame([1, 4, 5], [1, 4, 5]));
console.log(isSame([1, "4", 4], [1, 4, 4]));
console.log(isSame([2, 5, 6], 256)); 
console.log(isSame({ data: [2, 5, 6] }, [2, 5, 6]));