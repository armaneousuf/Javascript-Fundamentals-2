function inchToFeet(inch) {
  const feetFraction = inch * 0.08333333;
  const feetNumber = parseInt(feetFraction);
  const feetRemaining = inch % 12;
  const result = feetNumber + " feet " + feetRemaining + " inches";
  return result;
}

const result = inchToFeet(75);
// console.log(result);

function mileToKilometer(mile) {
  const kilo = mile * 1.60934;
  return kilo;
}

const mile = mileToKilometer(20);
// console.log(mile);

function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit;
}

const celsius = celsiusToFahrenheit(100);
// console.log(celsius);

function minutesToHours(minutes) {
  const hours = Math.floor(minutes / 60);
  const minutesRemaining = minutes % 60;
  return hours + " hour " + minutesRemaining + " seconds";
}

const result2 = minutesToHours(200);
console.log(result2);