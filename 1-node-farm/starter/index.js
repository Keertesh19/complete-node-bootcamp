const fs = require("fs");

// Synchronous way
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);
const textOut = `This is what we know about the avacado ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log(`File written with the text \n"${textOut}"`);
console.log(`Verification : ${fs.readFileSync("./txt/output.txt", "utf-8")}`);
