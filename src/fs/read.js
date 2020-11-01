const fs = require("fs");
    
const buffer_out = fs.readFileSync("./index.js");
const data = fs.readFileSync("./index.js", "utf-8");

console.log(buffer_out);
console.log(data);

console.log('===== 异步 =====');

const fs_out = fs.readFile("./index.js", "utf-8", (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data);
})