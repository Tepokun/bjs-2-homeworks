"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4 * a * c;
    if (d < 0) {
      return arr;
    } else if (d === 0) {
      x = -b/(2*a);
      arr = [x];
    } else if (d > 0) {
      x = (-b + Math.sqrt(d) )/(2*a);
      y = (-b - Math.sqrt(d) )/(2*a);
      arr = [x, y]
    }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}