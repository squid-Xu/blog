# Vue3+Vite+Ts搭建步骤


## 环境准备

- 开发工具

> `Visual Studio Code` [下载](https://code.visualstudio.com/Download)

> 推荐的配置是  [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 扩展。

- 运行环境

> `Node.js` [下载](https://nodejs.org/zh-cn)

> Vite 需要 Node.js 版本 18+ 或 20+。


## 项目初始化

> 使用 `Vite` 创建 `Vue` 应用

> [搭建第一个 Vite 项目](https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project)

- 执行以下命令完成 vue 、typescirpt 模板项目的初始化

```sh
# npm 7+，需要添加额外的 --：
npm create vite@latest vue3-vite-demo -- --template vue-ts
```
- `vue3-vite-demo`: 自定义的项目名称

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240915/image.7p3k4wbh1k.webp)

- 使用VSCode打开项目,运行一下命令：

> `npm install`

> `npm run dev`

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240915/image.9kg4xiw82h.webp)

- 浏览器访问 http://localhost:5173/ 预览

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240915/image.361j1xfylk.webp)


## src 路径别名配置

> 相对路径别名配置，使用 @ 代替 src

##### 安装@types/node

- 本地安装 Node 的 TypeScript 类型描述文件即可解决编译器报错

```sh
npm install @types/node --save-dev
```

##### Vite 配置

- 配置 vite.config.ts


```ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// 引入path模块 
import path from 'path'; // [!code ++]

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	//路径别名
	resolve: { // [!code ++]
		alias: { // [!code ++]
			'@': path.resolve(__dirname, 'src'), // [!code ++]
		}, // [!code ++]
	},// [!code ++]
});
```

- 改成别名路径导入，就会提示 “找不到模块“@/components/HelloWorld.vue”或其相应的类型声明”

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240915/image.4jo25zntcx.webp)

##### TypeScript 编译配置

> tsconfig.app.json 增加paths的路径映射配置

> [ts模块解析文档](https://www.tslang.cn/docs/handbook/module-resolution.html)


```json
{
	"compilerOptions": {
		"paths": { // [!code ++]
			"@/*": ["./src/*"] // [!code ++]
		} // [!code ++]
	},
	"include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue"]
}
```