const fs = require("fs");

const data = fs.readFileSync("read.js");

// fs.writeFileSync("index.txt", data);

fs.writeFile("index.txt", data, err => {
    // 无错时 err 的值为 null
    if(!err) {
        fs.readFile('./index.txt', "utf-8", (err, data) => {
            console.log(data);
        })
    }
})