import os from "os";

const print = (name, data) => console.log(`${name.padEnd(20)}: ${data}`);

console.log("-".repeat(36));
console.log("System Information".padStart(27));
console.log("-".repeat(36));

print("Username", os.userInfo()?.username);
print("Hostname", os.hostname());
print("OS Type", os.type());
print("OS Platform", os.platform());
print("OS Release", os.release());
print("CPU Architecture", os.arch());
print("Total Memory", `${(os.totalmem() / 1024 ** 3).toFixed(2)} GB`);
print("Free Memory", `${(os.freemem() / 1024 ** 3).toFixed(2)} GB`);
print("CPU Core", os.cpus().length);
