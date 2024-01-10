## 获取浏览器信息

```js
<script>
    /**
        *获取浏览器信息
        */
    function getUserAgentInfo() {
        const browserReg = {
            Chrome: /Chrome/,
            IE: /MSIE/,
            Firefox: /Firefox/,
            Opera: /Presto/,
            Safari: /Version\/([\d.]+).*Safari/,
            '360': /360SE/,
            QQBrowswe: /QQ/,
            Edge: /Edg/
        };
        const deviceReg = {
            iPhone: /iPhone/,
            iPad: /iPad/,
            Android: /Android/,
            Windows: /Windows/,
            Mac: /Macintosh/
        };
        const userAgentStr = navigator.userAgent;
        const userAgentObj = {
            browserName: '', // 浏览器名称
            browserVersion: '', // 浏览器版本
            osName: '', // 操作系统名称
            osVersion: '', // 操作系统版本
            deviceName: '' // 设备名称
        };
        for (const key in browserReg) {
            if (browserReg[key].test(userAgentStr)) {
                userAgentObj.browserName = key;
                if (key === 'Chrome') {
                    userAgentObj.browserVersion = userAgentStr.split('Chrome/')[1].split(' ')[0];
                } else if (key === 'IE') {
                    userAgentObj.browserVersion = userAgentStr.split('MSIE ')[1].split(' ')[1];
                } else if (key === 'Firefox') {
                    userAgentObj.browserVersion = userAgentStr.split('Firefox/')[1];
                } else if (key === 'Opera') {
                    userAgentObj.browserVersion = userAgentStr.split('Version/')[1];
                } else if (key === 'Safari') {
                    userAgentObj.browserVersion = userAgentStr.split('Version/')[1].split(' ')[0];
                } else if (key === '360') {
                    userAgentObj.browserVersion = '';
                } else if (key === 'QQBrowswe') {
                    userAgentObj.browserVersion = userAgentStr.split('Version/')[1].split(' ')[0];
                } else if (key === 'Edge') {
                    userAgentObj.browserVersion = userAgentStr.split('Edg/')[1].split(' ')[0];
                }
            }
        }

        for (const key in deviceReg) {
            if (deviceReg[key].test(userAgentStr)) {
                userAgentObj.osName = key;
                if (key === 'Windows') {
                    userAgentObj.osVersion = userAgentStr.split('Windows NT ')[1].split(';')[0];
                } else if (key === 'Mac') {
                    userAgentObj.osVersion = userAgentStr.split('Mac OS X ')[1].split(')')[0];
                } else if (key === 'iPhone') {
                    userAgentObj.osVersion = userAgentStr.split('iPhone OS ')[1].split(' ')[0];
                } else if (key === 'iPad') {
                    userAgentObj.osVersion = userAgentStr.split('iPad; CPU OS ')[1].split(' ')[0];
                } else if (key === 'Android') {
                    userAgentObj.osVersion = userAgentStr.split('Android ')[1].split(';')[0];
                    userAgentObj.deviceName = userAgentStr.split('(Linux; Android ')[1].split('; ')[1].split(' Build')[0];
                }
            }
        }
        return userAgentObj;
    }

    /**
        *方法使用
        */
    let userAgentInfo = getUserAgentInfo();
    console.log(userAgentInfo);
    alert(`
            浏览器名称：${userAgentInfo.browserName}\n
            浏览器版本：${userAgentInfo.browserVersion}\n
            操作系统名称：${userAgentInfo.osName}\n
            操作系统版本：${userAgentInfo.osVersion}\n
            设备名称：${userAgentInfo.deviceName}
        `)
</script>
```

---

## 运行结果

![alt 属性文本](https://squid-xu.github.io/static/picture/2024/01/20240110111841.png)
![alt 属性文本](https://squid-xu.github.io/static/picture/2024/01/20240110111929.png)
![alt 属性文本](https://squid-xu.github.io/static/picture/2024/01/20240110112007.png)
![alt 属性文本](https://squid-xu.github.io/static/picture/2024/01/20240110112200.png)
![alt 属性文本](https://squid-xu.github.io/static/picture/2024/01/20240110112235.png)
![alt 属性文本](https://squid-xu.github.io/static/picture/2024/01/20240110112329.png)

---

## 例子地址

[https://squid-xu.github.io/static/example/utils/browser.html](https://squid-xu.github.io/static/example/utils/browser.html)
