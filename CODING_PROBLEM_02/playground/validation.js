function multiply(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return "Input must be a number";
    }
    return num1 * num2;
}

console.log(multiply(3, '22'));