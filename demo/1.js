// 获取元素
const btn = document.getElementById('btn');

btn.onclick = function () {
	import('./2.js').then(res => {
		console.log(res); //Module {Symbol(Symbol.toStringTag): 'Module'}
		res.hello(); //你好
	});
};
