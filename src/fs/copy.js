const fs = require("fs");

// fs.copyFileSync("index.js", "index.txt");

fs.copyFile("index.js", "index.txt", (err, data) => {
    console.log(data)
})