const printPattern = (n) => {
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
