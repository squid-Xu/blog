# 混合APP开发技术选型

## 选型步骤

- 了解业务需求
- 了解不同的方案，比较不同方案的优缺点
- 考虑成本、开发周期、成员技术栈
- 进行技术选型

## 原生(Native)APP、webApp、混合(Hybrid)APP三者之间的区别

#### 1、Native APP

> 传统的原生`App`开发模式，有`iOS`和`Android`两大系统，需要各自语言开发各自`App`。

- `ios`：开发语言为`Object-c`或者`Swift`

- `Android`：开发语言为`Java,Kotlin`

#### 2、webApp

> 指的是运行在移动设备的网页应用(H5应用)。目前大部分是指使用`vue`或者`react`等前端框架制作的单页应用(SPA)。

#### 3、Hybrid App

> 指的是在一个`App`中内嵌一个轻量级的浏览器，一部分原生的功能改为`Html 5`来开发，这部分功能不仅能够在不升级`App`的情况下动态更新，而且可以在`Android`或`iOS`的`App`上同时运行，让用户的体验更好又可以节省开发的资源。

- 可以理解为`webApp`和`Native App`的合体版本。

## 为什么会出现Hybrid App

> 原因在于Native App开发成本高，开发周期长，并且需要配置IOS和Android两个团队。而webApp开发简单,开发周期短，并且跨平台性好,但是性能不如Native App.于是,出于取长补短的原则,就有了两者的结合体：Hybrid App.

## Hybrid App实现技术方案

#### 1、H5+JSBridge

- 指通过JSBridge完成H5和Native的通信，赋予H5一定的端能力。是一种基于WebView UI的解决方案。

- 主要的原理是，由Native通过JSBridge等方法提供统一的API，然后用Html+Css实现界面，JS来写逻辑，调用API，最终的页面在Webview中显示，这种模式下，Android、iOS的API一般有一致性，Hybrid App所以有跨平台效果。

#### 2、React-Native

- Facebook发现Hybrid App存在很多缺陷和不足，于是发起开源的一套新的App开发方案RN。使用JSX(React)语言写原生界面，js通过JSBridge调用原生API渲染UI交互通信。

#### 3、Weex

- 阿里巴巴开发团队在RN的成功案例上，重新设计出的一套开发模式，站在了巨人肩膀上并有淘宝团队项目做养料，广受关注，2016年4月正式开源，并在v2.0版本官方支持Vue.js，与RN分庭抗礼。目前该项目是Apache在管理,国内热度不是很高。

#### 4、HBuilder+uni-app

- uni-app是HBuilder母公司DCloud推出的一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉/淘宝）、快应用等多个平台。

#### 5、Taro

- react版本的Uni-app.

- Taro 是由京东凹凸实验室打造的多端统一开发框架,支持使用 React/Vue/Nerv 等框架来开发微信/京东/百度/支付宝/字节跳动/ QQ 小程序/H5 等应用。

#### 6、Flutter

- Flutter是谷歌于2017年推出的移动端UI框架，用于快速的创建跨平台,高性能的移动应用，使用C、C ++、Dart和Skia（2D渲染引擎）构建.