const { execFile } = require('child_process');
const child = execFile('node', ['/Users/hanyubo/Documents/node/src/child_process/exec.js'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});