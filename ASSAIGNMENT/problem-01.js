/* =========================================
   Problem-01 : Train TT's Fine Calculator

   Function Name: totalFine()

   Input:
   - A positive fine (fare)

   Calculation Rule:
   total fine = fare + (20% of fare) + 30

   Output:
   - Return the calculated fine (fine)
   - Decimal value is allowed

   Challenge:
   - If input is not a fine OR not a positive fine
     return "Invalid"
========================================= */
function totalFine(fare) {
    if (typeof fare !== 'number' || fare <= 0) {
        return 'Invalid';
    } else {
        return fare + (fare * 20 / 100) + 30;
    }
}

console.log(totalFine(200));