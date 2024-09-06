# uni-app制作APP壳子

> 领导让做一个`Android APP`，使用混合模式开发（APP套壳+内嵌H5页面模式），通过H5的形式发布，也就是发版不需要更新APP。

![微信图片_20240905100845](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240906/微信图片_20240905100845.4g4fvb72du.webp)


## 技术选型

| 框架          | Android客户端   |  打包方式  |系统级API |
| ------------- | :-----------:  |      ----:| ----:    |
| Electron      |不支持          |本地打包        |具备      |
| Flutter       |支持          |本地打包        |具备      |
| RN       |支持          |本地打包        |具备      |
| Flutter       |支持          |本地打包       |具备      |
| uniapp       |支持          |本地打包、云打包       |具备      |

- 对比了业界主流的跨端框架，大多数的跨端框架都只支持本地打包。本地打包有以下几个弊端：

- 本地环境搭建麻烦，一般步骤如下：

1、安装`Android Studio`

2、安装`Android SDK`并配置环境变量

3、设置`Android`模拟器

4、调试`Android`设备

- 多人维护时，每人都需要搭建本地环境，成本较高


::: tip 总结
- 搭建本地环境，比较耗时，还会遇到各种环境问题。而云打包就省去了本地打包的诸多麻烦，简单来说，云打包就是开发者不需要在本地搭建环境，通过共用云端搭建的环境来打包构建安装包。
- 拥有云打包能力的 `uniapp`。它可以让我们以很小的代价完成App打包的工作，达到快速开发的目的。
:::

## 项目实践

#### 安装HBuilderX编辑器

- `uniapp` 的云打包功能，是集成在`HBuilderX`编辑器中的，因此我们需要先安装`HBuilderX`编辑器。


#### App项目搭建

- 通过`HBuilderX`新建个项目，由于我们只需要一个APP的壳，所以选择默认模板即可。

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240906/image.5j45672o88.webp)

- 项目搭建好后，开始改造工作。

#### 原生页面改造

- 只需把首页的内容替换一个`webview`标签即可

```js
<template>
	<view>
		<web-view :src="targetUrl"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				targetUrl:'https://www.baidu.com'
			}
		},
	}
</script>

```

#### 原生页面路由配置 pages.json

- 导航栏使用 `custom` 模式

```js
{
	"pages": [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
		{
			"path" : "pages/index/index",
			"style" : 
			{
				"navigationBarTitleText" : "容量管理智慧化平台",
				"navigationStyle": "custom"
			}
		}
	],
	"globalStyle": {
		"navigationBarTextStyle": "black",
		"navigationBarTitleText": "uni-app",
		"navigationBarBackgroundColor": "#F8F8F8",
		"backgroundColor": "#F8F8F8"
	},
	"uniIdRouter": {}
}

```


## 云打包

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240906/image.9dcwp5yp0d.webp)



## 总结

- 以前公司APP项目都是Android端同学做的壳子，最近Android同学离职了，所以这种事情都得前端同学自己搞，主要目前大前端都已经支持了，所以我也比较喜欢专研，想尝试一下。

![微信图片_20240906100157](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240906/微信图片_20240906100157.231te4ksxk.webp)