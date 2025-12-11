/* ================================
   Task-4
   Write a function called count_zero()
   which will take a binary string
   (a string that contains only 0 and 1)
   and count how many '0' characters
   are present in that string.
================================ */

function count_zero(str) {
    let count = 0;

    for (const number of str) {
        if (number === '0') {
            count++;
        }
    }
    return count;
}

const str = '010010110';
console.log(count_zero(str));