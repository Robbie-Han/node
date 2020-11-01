const { exec } = require('child_process');

exec('cat *.js | wc -l', (error, stdout, stderr) => {
    if(error) {
        console.log(`执行错误： ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
});


