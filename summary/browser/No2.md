# 网页端自动播放语音

- 由于浏览器隐私设置，禁止自动播放音频和视频，需要用户交互才能播放。所以，网页端自动播放语音需要用户交互才能播放。例如，点击按钮、触摸屏幕等。

## 解决办法

- [使用 Web Audio API 播放音频文件]
- Web Audio API中的AudioContext接口可以处理音频流数据并播放

##  Android  支付宝、微信；ios  支付宝

```js
<template>
	<div>测试语音播放</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			context: null,
			source: null,
			audioBuffer: null,
		};
	},
	mounted() {
		this.start();
	},
	methods: {
		start() {
			window.AudioContext =
				window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
			this.context = new window.AudioContext();
			this.audioBuffer = null;
			this.loadAudioFile(require('./assets/red.mp3'));
		},
		// 加载音频文件
		loadAudioFile(url) {
			var xhr = new XMLHttpRequest(); //通过XHR下载音频文件
			xhr.open('GET', url, true);
			xhr.responseType = 'arraybuffer';
			xhr.onload = () => {
				//下载完成
				this.initSound(xhr.response);
			};
			xhr.send();
		},
		// 解码音频文件
		initSound(arrayBuffer) {
			this.context.decodeAudioData(
				arrayBuffer,
				buffer => {
					//解码成功时的回调函数
					this.audioBuffer = buffer;
					this.playSound();
				},
				e => {
					//解码出错时的回调函数
					console.log('Error decoding file', e);
				}
			);
		},
		// 播放音频
		playSound() {
			this.source = this.context.createBufferSource(); //获取音频数据
			this.source.buffer = this.audioBuffer;
			this.source.loop = true;
			this.source.connect(this.context.destination);
			this.source.start(); //立即播放
		},
	},
};
</script>
```
##  ios 微信

```js

<html>
	<script src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
</html>

<template>
	<div>
		<h1>测试语音播放</h1>
		<audio :loop="true" id="mp3Btn" ref="audioTip" style="visibility: hidden">
			<source :src="audioSrc" />
		</audio>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			audioSrc: '',
		};
	},
	mounted() {
		this.audioSrc = require('./assets/red.mp3');
		if (typeof window.WeixinJSBridge === 'undefined') {
			//未执行WeixinJSBridge 开始监听 WeixinJSBridge
			document.addEventListener(
				'WeixinJSBridgeReady',
				() => {
					document.getElementById('mp3Btn').play();
				},
				false
			);
		} else {
			//已经执行 使用 getNetworkType 调用获取网络类型后执行
			window.WeixinJSBridge.invoke('getNetworkType', {}, () => {
				document.getElementById('mp3Btn').play();
			});
		}
	},
};
</script>
```