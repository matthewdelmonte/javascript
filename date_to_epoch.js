const prompt = require("prompt-sync")();

const date = prompt("Enter the date YYYY-MM-DD: ");
const time = prompt("Enter the time HH:MM:SS: ");

const formatDateTime = `${date}T${time}`;

const newDate = new Date(formatDateTime);
const epoch = Math.floor(newDate.getTime());

console.log(`The epoch for the date/time entered is: ${epoch}`);
