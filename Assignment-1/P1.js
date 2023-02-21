const isEven = (num) => {
  return num % 2 == 0;
};

const chechEvenOdd = (num) => {
  if (isEven(num)) {
    console.log(`${num} is even number.`);
  } else {
    console.log(`${num} is odd number.`);
  }
};

console.log("Enter any Number");
process.stdin.once("data", (data) => {
  let num = parseInt(data);
  chechEvenOdd(num);
  process.exit(0);
});
