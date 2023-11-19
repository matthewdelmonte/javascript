// introduction to branchless programming, replacing if, while statements from loops to speed up computation.
import { timeToComplete, timeDifference } from './performance.js';

const s0 = performance.now();
// traditional if statement
const smaller = (a, b) => {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
const s1 = performance.now();
const resultOfSmaller = timeToComplete(s0, s1);
console.log(`smaller ran in: ${resultOfSmaller} milliseconds.`);

console.log(`Smaller: ${smaller(15, 10)}`);

const b0 = performance.now();
// replaced the if statement with a conditional statement
const smaller_branchless = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError("Both arguments must be integers.");
    }
    return a * (a < b) + b * (b <= a);
}
const b1 = performance.now();
const resultOfBranchless = timeToComplete(b0, b1);
const runDifference = timeDifference(resultOfSmaller, resultOfBranchless);
console.log(`branchless ran in: ${resultOfBranchless} milliseconds.`);
console.log(`branchless ran ${runDifference}% faster than smaller`);

console.log(`Branchless: ${smaller_branchless(120, 408)}`);