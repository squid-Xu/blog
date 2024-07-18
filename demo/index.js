
// 使用Node中的util.promisify()方法的基本使用和实现

//引入util模块
const util = require('util')
//引入 fs 模块
const fs = require('fs')
//返回一个新的函数
let mineReadFile = util.promisify(fs.readFile)

mineReadFile('./content.txt').then(
    value=>{
        console.log(value);//<Buffer e4 bd a0 e5 a5 bd ef bc 81>
    },
    reason => {
		console.log(reason);
	}
)