// recursion
const prompt = require("prompt-sync")();

const factorial = (n) => {
    const input = prompt("Enter a positive integer: ");
    const number = parseInt(input);
    if (number < 0) {
        console.log("Error! Factorial for negative number does not exist.");
    } else {
        console.log(`The factorial of ${number} is ${recursion(number)}`);
    }
}

function recursion(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * recursion(n - 1);
    }
}

factorial(6); // expect 720