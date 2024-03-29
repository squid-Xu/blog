## 前端获取用户 ip 地址

```js
<script>
	/**
	 * 获取用户ip地址
	 * @param {*}
	 */
	function getIPs() {
		return new Promise((resolve, reject) => {
			var ip_dups = {};
			var RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
			// var useWebKit = !!window.webkitRTCPeerConnection;
			var mediaConstraints = { optional: [{ RtpDataChannels: true }] };
			// 这里就是需要的ICEServer了
			var servers = { iceServers: [{ urls: 'stun:stun.services.mozilla.com' }, { urls: 'stun:stun.l.google.com:19302' }] };
			var pc = new RTCPeerConnection(servers, mediaConstraints);
			function handleCandidate(candidate) {
				var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/;
				var hasIp = ip_regex.exec(candidate);
				if (hasIp) {
					var ip_addr = ip_regex.exec(candidate)[1];
					if (ip_dups[ip_addr] === undefined) {
						resolve(ip_addr);
					}
					ip_dups[ip_addr] = true;
				}
			}
			// 网络协商的过程
			pc.onicecandidate = function (ice) {
				if (ice.candidate) {
					handleCandidate(ice.candidate.candidate);
				}
			};
			pc.createDataChannel('');
			// 创建一个SDP(session description protocol)会话描述协议 是一个纯文本信息 包含了媒体和网络协商的信息
			pc.createOffer(
				function (result) {
					pc.setLocalDescription(
						result,
						function () {},
						function () {}
					);
				},
				function () {}
			);
			setTimeout(function () {
				var lines = (pc.localDescription && pc.localDescription.sdp && pc.localDescription.sdp.split('\n')) || [];
				lines.forEach(function (line) {
					if (line.indexOf('a=candidate:') === 0) {
						handleCandidate(line);
					}
				});
				reject('Failed to obtain the ip address. Procedure');
			}, 1000);
		});
	}
	// 方法使用
	getIPs()
		.then(res => {
			alert(`你的外网IP地址是：${res}`);
		})
		.catch(error => {
			alert(error);
		});
</script>
```

---

## 运行结果

![alt 属性文本](https://squid-xu.github.io/static/picture/2024/01/1704813007.png)

---

## 例子地址

[https://squid-xu.github.io/static/example/utils/ip.html](https://squid-xu.github.io/static/example/utils/ip.html)
