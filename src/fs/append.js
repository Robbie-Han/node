// appendFile的时候不会自动换行, 如果文件不存在会先建文件然后再将内容append到文件
const fs = require("fs");

// fs.appendFileSync("./index.txt", "\nhello");

fs.appendFile("./index.txt", "hhhhh", (err) => {
    console.log(err);
    if(!err) {
        fs.readFile("inde.js", (err, data) => {
            console.log()
        })
    }
})