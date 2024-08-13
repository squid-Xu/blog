# BFC 是什么，解决了什么问题

## 什么是 BFC

-   块级格式化上下文，
-   作用就是盒子里面的布局不会影响到外部

## BFC 规则

-   BFC 就是一个块级元素，会在垂直方向一个接一个排列
-   在页面中是一个隔离的独立容器，容器内部的元素不会影响到外部标签
-   垂直方向的距离由 margin 决定，同一个 BFC 的 2 个相领标签外边距会发生重叠
-   计算 BFC 高度时，浮动元素也参与计算

## 怎么触发 BFC

-   overflow：不为 visible 和 clip
-   position：absolute 或 fixed
-   float：不为 none
-   display：为 inline-block、table-cell、flex、inline-flex、table-caption 等

## BFC 的作用

-   解决子元素浮动造成父元素高度坍塌问题 将父元素触发 BFC

```js
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<style>
			* {
				margin: 0;
				padding: 0;
			}
			.main {
				padding: 10px;
				border: solid 1px red;
			}
			.box {
				width: 200px;
				height: 200px;
				background-color: aqua;
				float: left;
			}
		</style>
	</head>
	<body>
		<div class="main">
			<div class="box"></div>
		</div>
	</body>
</html>

```

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240713/image.8hgd35m2lj.webp)

```js
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<style>
			* {
				margin: 0;
				padding: 0;
			}
			.main {
				padding: 10px;
				border: solid 1px red;
				overflow: hidden;
				/* float: left; */
				/* position: absolute; */
				/* display: flex; */
			}
			.box {
				width: 200px;
				height: 200px;
				background-color: aqua;
				float: left;
			}
		</style>
	</head>
	<body>
		<div class="main">
			<div class="box"></div>
		</div>
	</body>
</html>

```

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240713/image.5mnoxdb62r.webp)

-   相领子元素使用 margin 时边距重叠问题 可以给 2 个子元素各套一个触发 BFC 的父元素 等等

```js
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<style>
			* {
				margin: 0;
				padding: 0;
			}
			.box {
				width: 200px;
				height: 200px;
				margin: 20px 0;
				background-color: aqua;
				border: solid 1px red;
			}
		</style>
	</head>
	<body>
		<div class="box"></div>
		<div class="box"></div>
	</body>
</html>

```

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240713/image.5q7av1e1rx.webp)

```js
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<style>
			* {
				margin: 0;
				padding: 0;
			}
			.main {
				overflow: hidden;
                /* display: flex; */
			}
			.box {
				width: 200px;
				height: 200px;
				margin: 20px 0;
				background-color: aqua;
				border: solid 1px red;
			}
		</style>
	</head>
	<body>
		<div class="main">
			<div class="box"></div>
		</div>
		<div class="main">
			<div class="box"></div>
		</div>
	</body>
</html>

```

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240713/image.6ik6crx5qd.webp)
