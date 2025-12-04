function doMath(num1, num2) {
    const add = num1 + num2;
    const substract = num1 - num2;
    const multiply = add * substract;
    const division = multiply / 2;

    return {add, substract, multiply, division};
}

const total = doMath(20, 5);
console.log(total);