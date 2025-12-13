/* 
Task-8: 
You are given an array of phone objects. Each phone has properties: name, price, color, camera.

Write a function to find the cheapest phone that satisfies the following conditions:
1. Camera must be 50MP or higher
2. Color must NOT be red

Sample Input:
const phones = [
  { name: "Galaxy S23", price: 1200, color: "Black", camera: "50MP" },
  { name: "iPhone 15", price: 1400, color: "Silver", camera: "48MP" },
  { name: "Pixel 8", price: 900, color: "White", camera: "50MP" },
  { name: "OnePlus 12", price: 850, color: "Blue", camera: "48MP" },
  { name: "Xiaomi 14", price: 750, color: "Red", camera: "64MP" },
];

Expected Output:
{ name: "Pixel 8", price: 900, color: "White", camera: "50MP" }
*/

const phones = [
  { name: "Galaxy S23", price: 1200, color: "Black", camera: "50MP" },
  { name: "iPhone 15", price: 1400, color: "Silver", camera: "48MP" },
  { name: "Pixel 8", price: 900, color: "White", camera: "50MP" },
  { name: "OnePlus 12", price: 850, color: "Blue", camera: "48MP" },
  { name: "Xiaomi 14", price: 750, color: "Red", camera: "64MP" },
];

function expensivePhone(phones) {
    let max = null;
    for (const ph of phones) {
        if (
          parseInt(ph.camera) >= 50 &&
          ph.color !== "Red" 
        ) {
            if (max === null) {
                max = ph;
            } else if (ph.price > max.price) {
                max = ph;
            }
        }
    }
    return max;
}
console.log(expensivePhone(phones));