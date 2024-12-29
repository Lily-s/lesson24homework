// 1. Add 0.1 and 0.2 to get a mathematically correct answer
let num1 = 0.1;
let num2 = 0.2;
let sum = (num1 + num2).toFixed(2);

console.log(parseFloat(sum));

//2. Add the string “1” and the digit 2 (both operands must be in variables),
// and get a mathematically correct answer.

let string1 = "1"; // String
let digit = 2; // Number

let total = Number(string1) + digit;
console.log(total);

//3. Ask the user for a three-digit number and print it backwards.
// To solve the problem, you will need the  % (remainder of division).

let tdn = prompt("Enter a three-digit number please:");
var hundreds = Math.trunc(tdn / 100);
var tens = Math.trunc((tdn % 100) / 10);
let ones = tdn % 10;
let reversedNumber = ones * 100 + tens * 10 + hundreds;
alert("The reversed number is: " + reversedNumber);
alert("The reversed number is: " + ones + tens + hundreds);
