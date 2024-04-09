const fs = require("fs");

fs.writeFile('message.txt', "Hello!", (err) => {
    if (err) throw err;
    console.log("File Written Successfully!");
})