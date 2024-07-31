# 图片点击放大、预览


- google搜索的时候发现这个插件很漂亮,刚好想着给自己博客也搞一个

### 插件地址

[https://www.npmjs.com/package/vitepress-plugin-image-viewer](https://www.npmjs.com/package/vitepress-plugin-image-viewer)

### 效果

![640](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240731/640.5c0vuad5e4.webp)

### 安装使用

#### 1、安装依赖

```sh
npm i vitepress-plugin-image-viewer
```
#### 2、添加代码

::: code-group

```js [.vitepress\theme\index.ts]
// .vitepress\theme\index.ts

import DefaultTheme from 'vitepress/theme';
import { useRoute } from 'vitepress';

// 加载css
import './index.css';

// 图片放大/预览
import 'viewerjs/dist/viewer.min.css';
import imageViewer from 'vitepress-plugin-image-viewer';
// 如需按钮点击预览图片
// import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';

export default {
	...DefaultTheme,
	//自定义页面布局
	enhanceApp({ app }) {
		// 注册全局组件，如果你不想使用也可以不添加
		// app.component('vImageViewer', vImageViewer);
	},
	setup() {
		// 获取路由
		const route = useRoute();
		// 使用
		imageViewer(route);
	},
};
```
```js [.vitepress/theme/index.css]
// .vitepress/theme/index.css

.main img:not(.icon-img) {
	cursor: zoom-in; /* 移动到图片上，可放大 */
}

// :not(.icon-img) 此代码是为了过滤导航页面的img标签
// 注意：上面的代码只是过滤img图片没有放大效果，但不能阻止点击，如需阻止可添加下面的代码
.icon-img {
    pointer-events: none;
}
```
:::

### 点击按钮打开图片

<vImageViewer src="https://github.com/squid-Xu/picx-images-hosting/raw/master/20240731/640.5c0vuad5e4.webp" alt="点击按钮查看图片" :inline="false"/>

- 代码如下

```js
<vImageViewer src="https://github.com/squid-Xu/picx-images-hosting/raw/master/20240731/640.5c0vuad5e4.webp" alt="点击按钮查看图片" />
```