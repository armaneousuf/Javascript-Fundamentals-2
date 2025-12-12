function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return `Yay! It's a leap year`;
    }
    else {
        return `Nope! It's not a leap year`;
    }
}

console.log(leapYear(1900));
console.log(leapYear(2000));
console.log(leapYear(2024));
console.log(leapYear(2025));