# 移动端开发自适应配置

-   主要通过 amfe-flexible 和 postcss-pxtorem。

## amfe-flexible

-   作用：用于动态设置 HTML 根元素的 font-size，从而实现基于 rem 的响应式布局。

-   使用：

```js
安装：npm install amfe-flexible
引入：在 main.js 中import 'amfe-flexible'
```

## postcss-pxtorem

-   作用：将 px 自动转化为 rem
-   使用

```js
安装：npm install postcss-pxtorem

配置：根目录下创建postcss.config.js文件
```

```js
export default {
	plugins: {
		'postcss-pxtorem': {
			rootValue: 75, // 指定 px 转换为 rem 的基准值,一般若设计稿宽度是750px则设置为75。设计稿宽度的1/10，代表 1rem=75px
			unitPrecision: 2, //允许REM单位增加的十进制数字。
			propList: ['*'], // 需要做转化处理的css属性  * 就是所有属性都要转换，如`hight`、`width`、`margin`等，`*`表示全部
			selectorBlackList: [], //要忽略的选择器，保留为px,支持正则表达式。//例如：selectorBlackList: ['.van'],
			replace: true, //是否直接替换属性值，而不是添加备用属性。
			mediaQuery: false, //允许在媒体查询中转换px。
			minPixelValue: 0, //设置要替换的最小像素值。所有小于等于该值的 px 单位将不会被转换。
			exclude: /node_modules/i, //要忽略并保留为px的文件路径。
		},
	},
};
```
