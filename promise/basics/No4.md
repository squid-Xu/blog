# Promise 实践练习-AJAX 请求

```js
//接口地址 https://api.apiopen.top/api/getTime

const p = new Promise((resolve, reject) => {
	//1、创建对象
	const xhr = new XMLHttpRequest();
	//2、初始化
	xhr.open('GET', 'https://api.apiopen.top/api/getTime');
	//3、发送
	xhr.send();
	//4、处理响应结果
	xhr.onreadystatechange = function () {
		//判断响应状态码2XX
		if (xhr.readyState === 4) {
			if (xhr.status >= 200 && xhr.status < 300) {
				//响应体
				resolve(xhr.response);
			} else {
				//失败状态码
				reject(xhr.status);
			}
		}
	};
});

p.then(
	value => {
		console.log(value); //{"code":200,"message":"成功!","result":{"date":"2024-07-18","time":"10:29:00","weekday":"星期四","dateTime":"2024-07-18 10:29:00"}}
	},
	reason => {
		console.log(reason); //{"code":404,"message":"资源飞走啦~"}
	}
);
```

## Promise 封装 AJAX 请求

```js
function sendAJAX(url) {
	return new Promise((resolve, reject) => {
		//1、创建对象
		const xhr = new XMLHttpRequest();
		//2、初始化
		xhr.open('GET', url);
		//3、发送
		xhr.send();
		//4、处理响应结果
		xhr.onreadystatechange = function () {
			//判断响应状态码2XX
			if (xhr.readyState === 4) {
				if (xhr.status >= 200 && xhr.status < 300) {
					//响应体
					resolve(xhr.response);
				} else {
					//失败状态码
					reject(xhr.status);
				}
			}
		};
	});
}

sendAJAX('https://api.apiopen.top/api/getTime').then(
	value => {
		console.log(value); //{"code":200,"message":"成功!","result":{"date":"2024-07-18","time":"10:29:00","weekday":"星期四","dateTime":"2024-07-18 10:29:00"}}
	},
	reason => {
		console.log(reason); //{"code":404,"message":"资源飞走啦~"}
	}
);
```
