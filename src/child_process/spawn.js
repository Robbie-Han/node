// child_process.spawn() 方法会异步地衍生子进程，且不阻塞 Node.js 事件循环。spawnSync()是与其等效的同步方法
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

// spawn输出如果不转字符串，格式为buffer类型
ls.stdout.on('data', (data) => {
  console.log(data.toString());
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`子进程退出，退出码 ${code}`);
});

// stdin、 stdout 和 stderr 的管道会在父 Node.js 进程和衍生的子进程之间建立。 这些管道具有有限的（且平台特定的）容量。如果子进程写入 stdout 时超出该限制且没有捕获输出，则子进程会阻塞并等待管道缓冲区接受更多的数据。 这与 shell 中的管道的行为相同。 如果不消费输出，则使用 { stdio: 'ignore' } 选项。