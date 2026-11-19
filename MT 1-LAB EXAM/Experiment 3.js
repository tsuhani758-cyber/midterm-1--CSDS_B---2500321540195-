const fs = require('fs');
// CREATE
fs.writeFileSync('data.txt', 'Hello ABES');
console.log("File Created");

// READ
let data = fs.readFileSync('data.txt', 'utf8');
console.log("File Data:", data);

// UPDATE
fs.appendFileSync('data.txt', ' Welcome');
console.log("File Updated");

// DELETE
fs.unlinkSync('data.txt');
console.log("File Deleted");