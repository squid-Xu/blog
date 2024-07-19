# 简介

## 什么是语言

-   计算机就是一个由人来控制的机器，人让它干嘛，它就得干嘛。
-   我们要学习的语言就是人和计算机交流的工具，人类通过语言来控制、操作计算机。
-   编程语言和我们说的中文、英文本质上没有区别，只是语法比较特殊。

-   语言的发展：

> 纸带机：机器语言

> 汇编语言：符号语言

> 现代语言：高级语言

## 起源

-   JavaScript 诞生于 1995 年，它的出现主要是用于处理网页中的前端验证。

-   所谓的前端验证，就是指检查用户输入的内容是否符合一定的规则。

-   比如：用户名的长度，密码的长度，邮箱的格式等。

## 简史

-   JavaScript 是由网景公司发明，起初命名为 LiveScript,后来由于 SUN 公司的介入更名为 JavaScript

-   1996 年微软公司在其最新的 IE3 浏览器中引入了自己对 JavaScript 的实现 JScript

-   于是市面上存在两个版本的 JavaScript，一个网景公司的 JavaScript 和微软公司的 JScript。

-   为了确保不同的浏览器上运行的 JavaScript 标准一致，所以几个公司共同定制 JS 的标准名命名为 ECMAScript。

## 时间表

| 年份    |                  事件                  |
| ------- | :------------------------------------: |
| 1995 年 |       网景公司开发了 JavaScript        |
| 1996 年 | 微软发布了和 JavaScript 兼容的 JScript |
| 1997 年 |     ECMAScript 第一版（ECMA-262）      |
| 1998 年 |           ECMAScript 第 2 版           |

## 标准

-   ECMAScript 是一个标准，而这个标准需要由各个厂商去实现。
-   不同的浏览器厂商对该标准会有不同的实现。

| 浏览器            | 内核（渲染引擎） | JS 引擎                     |
| ----------------- | :--------------: | --------------------------- |
| FireFox           |      Gecko       | SpiderMonkey                |
| Internet Explorer |     Trident      | Chakra （ie9 以下 Jscript） |
| Safari            |      WebKit      | JavaScriptCore              |
| Chrome            |      Blink       | V8                          |

## 实现

-   我们已经知道 ECMAScript 是 JavaScript 标准，所以一般情况下这两个词我们认为是一个意思。

-   但是实际上 JavaScript 的含义却要更大一些。

-   一个完整的 JavaScript 实现应由一下三部分构成

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/image.8s372o6kk2.webp)

## 特点

-   解释型语言
-   类似于 C 和 Java 的语法结构
-   动态语言
-   基于原型的面向对象
