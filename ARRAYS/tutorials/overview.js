
const years = ["2020", "2021", "2022", "2023"];

console.log(years[2]);       // "2022"
console.log(years["2"]);     // "2022" → same as above


console.log(years["2"] !== years["02"]);


const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3

fruits[5] = 'mango';
console.log(fruits);

fruits.length = 10;
console.log(fruits);