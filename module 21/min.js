const height = [29, 30, 56, 12, 87, 45];

function getMin(numbers) {
    let min = numbers[0];
    for (const num of numbers) {
        if (num < min) {
            min = num;
        }
    }

    return min;
}

const min = getMin(height);
console.log("The lowest number is", min);
//  BUILT IN METHOD
// console.log("The lowest number is", Math.min(...height));

 