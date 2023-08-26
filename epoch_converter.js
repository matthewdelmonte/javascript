const prompt = require("prompt-sync")();

const time = prompt("Enter the epoch time: ");

const date = new Date(parseInt(time));

console.log(`The epoch you entered is: ${date}`);
