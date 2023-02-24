import fs from "fs";

const writeTableInFile = (num) => {
  if (isNaN(num) || num < 1) {
    console.log("Invalid number.");
    return;
  }

  let table = "";
  for (let i = 1; i <= 10; ++i) {
    table += `${num} x ${i} = ${num * i}\n`;
  }
  console.log(table);
  fs.writeFileSync(`./table-${num}.txt`, table);
};

console.log("Enter any Number");
process.stdin.once("data", (data) => {
  let num = parseInt(data);
  writeTableInFile(num);
  process.exit(0);
});
