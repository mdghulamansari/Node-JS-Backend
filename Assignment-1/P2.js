const printPattern = (n) => {
  if (isNaN(n)) {
    process.stdout.write("Please enter number only.");
    return;
  }
  if (n <= 0) {
    process.stdout.write("Please enter only +ve number.");
    return;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ");
    }
    for (let j = 0; j <= i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};

console.log("Enter any Number");
process.stdin.once("data", (data) => {
  let num = parseInt(data);
  printPattern(num);
  process.exit(0);
});
