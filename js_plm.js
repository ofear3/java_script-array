// Write a JavaScript program to find the factorial of a number.

let number = 5;
let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
}

console.log("Factorial of " + number + " is: " + factorial);


// Write a JavaScript program to check whether a given number is a prime number.

let number = 7;
let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(number + " is a Prime number");
} else {
    console.log(number + " is not a Prime number");
}


‎// Write a JavaScript program to print numbers from 1 to 10.
‎
‎for (let i = 1; i <= 10; i++) {
‎    console.log(i);
‎}

‎//  Write a JavaScript program to find the sum of first 10 natural numbers.
‎
‎let sum = 0;
‎for (let i = 1; i <= 10; i++) {
‎    sum += i;
‎}
‎console.log("Sum is: " + sum);
‎
‎
‎//  Write a JavaScript program to find the factorial of a number.
‎
‎let num = 5;
‎let fact = 1;
‎for (let i = 1; i <= num; i++) {
‎    fact *= i;
‎}
‎console.log("Factorial is: " + fact);


‎//  Write a JavaScript program to check if a number is even or odd.
‎
‎let number = 7;
‎if (number % 2 === 0) {
‎    console.log("Even");
‎} else {
‎    console.log("Odd");
‎}


‎// Write a JavaScript program to find the largest of two numbers.
‎
‎let a = 10;
‎let b = 20;
‎Z
‎if (a > b) {
‎    console.log("Largest is: " + a);
‎} else {
‎    console.log("Largest is: " + b);
‎}


‎//  Write a JavaScript program to check if a number is positive, negative or zero.
‎
‎let n = -5;
‎
‎if (n > 0) {
‎    console.log("Positive");
‎} else if (n < 0) {
‎    console.log("Negative");
‎} else {
‎    console.log("Zero");
‎}

‎//  Write a JavaScript program to print multiplication table of 5.
‎
‎let table = 5;
‎
‎for (let i = 1; i <= 10; i++) {
‎    console.log(table + " x " + i + " = " + (table * i));
‎}
‎
‎//  Write a JavaScript program to reverse a string.
‎
‎let str = "hello";
‎let reversed = "";
‎
‎for (let i = str.length - 1; i >= 0; i--) {
‎    reversed += str[i];
‎}
‎
‎console.log("Reversed: " + reversed);
‎
