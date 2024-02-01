const fs = require("fs");

// Synchronous way
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);
const textOut = `This is what we know about the avacado ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log(`File written with the text \n"${textOut}"`);
console.log(`Verification : ${fs.readFileSync("./txt/output.txt", "utf-8")}`);

// Asynchronous way
fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
  if (err) return console.log("OOF! ");
  fs.readFile(`./txt/${data}.txt`, "utf-8", (err, text) => {
    console.log(text);
    fs.readFile("./txt/append.txt", "utf-8", (err, value) => {
      console.log(value);

      fs.writeFile("./txt/final.txt", `${text}\n${value}`, "utf-8", (err) => {
        console.log(`File written successfully.`);
      });
    });
  });
});
console.log("File File File");
