const message = "She sells seashells, by the seashore.";

let count = 0;

let letter = message.toLowerCase().split("");

letter.forEach(l => {
  if( l === "s") {
    count += 1
  }
})

console.log(`Count = ${count} `);
