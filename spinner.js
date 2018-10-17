const ora = require('ora');

const spinner = ora({spinner:'dots',text:'正在下载模板...'}).start();

setTimeout(()=>{
    spinner.stop();
},2000)