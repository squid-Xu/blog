# 清除浮动的方式

## 元素浮动会存在什么问题？

-   文字围绕浮动元素排版，我们可能希望文字排列在浮动元素下方

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
				width: 220px;
			}
			.box {
				width: 200px;
				height: 200px;
				margin: 20px 0;
				background-color: aqua;
				float: left;
			}
		</style>
	</head>
	<body>
		<div class="main">
			<div class="box"></div>
			<p>大概的时间颠三倒四大概的时间颠三倒四大概的时间颠三倒四大概的时间颠三倒四大概的时间颠三倒四</p>
		</div>
	</body>
</html>

```

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240713/image.86tja0w1dz.webp)

-   父元素高度坍塌

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
				margin: 20px 0;
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

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240713/image.4xufddbfdw.webp)

## 清除浮动的方式

-   1. 利用 clear 样式

> 在浮动元素同级的元素上增加属性 clear:both，告诉游览器清除左右两边的浮动

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
				width: 220px;
			}
			.box {
				width: 200px;
				height: 200px;
				margin: 20px 0;
				background-color: aqua;
				float: left;
			}
			p {
				clear: both;
			}
		</style>
	</head>
	<body>
		<div class="main">
			<div class="box"></div>
			<p>大概的时间颠三倒四大概的时间颠三倒四大概的时间颠三倒四大概的时间颠三倒四大概的时间颠三倒四</p>
		</div>
	</body>
</html>

```

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240713/image.8vmsu1qml9.webp)

-   2. 利用伪元素

> 给父元素添加一个伪元素，伪元素上做 clear:both

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
			.main::after {
				display: block;
				content: '';
				clear: both;
			}
			.box {
				width: 200px;
				height: 200px;
				margin: 20px 0;
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

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240713/image.70a81fiuky.webp)

-   3. overflow 清除浮动

> 父标签添加 overflow:hidden，实际上就是利用 BFC

[https://squid-xu.github.io/blog/summary/template/No6.html](https://squid-xu.github.io/blog/summary/template/No6.html)
