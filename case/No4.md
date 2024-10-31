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

- 浏览器访问 `http://localhost:5173/` 预览

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

## unplugin 自动导入

> 现有的组件库都可以按需导入了，像`Element Plus` 、`Vant`等

- 为了避免在多个页面重复引入 API 或 组件，由此而产生的自动导入插件来节省重复代码和提高开发效率。

| 插件        |      概念      |  自动导入对象 |
| ------------- | :-----------: | ----: |
| unplugin-auto-import | 按需自动导入API | ref，reactive,watch,computed 等API |
| unplugin-vue-components | 按需自动导入组件 | Element Plus 等三方库和指定目录下的自定义组件 |

- 看下自动导入插件未使用和使用的区别：


| 插件名        |      	未使用自动导入      |  使用自动导入 |
| ------------- | :-----------: | ----: |
| unplugin-auto-import      | ![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20241031/image.8s372o6kk2.4ckw4hrde0.jpg) | ![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20241031/image.8s372o6kk2.7sn7wl1pu6.jpg) |
| unplugin-vue-components    |   ![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20241031/image.8s372o6kk2.2a53gfs5qf.jpg)   |   ![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20241031/image.2vep9gsk80.9nzsp7bw1m.jpg) |

##### 安装插件依赖

```sh
npm install -D unplugin-vue-components unplugin-auto-import
```

##### vite.config.ts - 自动导入配置

```ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// 引入path模块
import path from 'path';

import AutoImport from 'unplugin-auto-import/vite'; // [!code ++]
import Components from 'unplugin-vue-components/vite'; // [!code ++]

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({ // [!code ++]
			// 自动导入 Vue 相关函数，如：ref, reactive, toRef 等 // [!code ++]
			imports: ['vue'], // [!code ++]
			dts: path.resolve(path.resolve(__dirname, 'src'), 'auto-imports.d.ts'), // 指定自动导入函数TS类型声明文件路径 // [!code ++]
		}), // [!code ++]
		Components({ // [!code ++]
			dts: path.resolve(path.resolve(__dirname, 'src'), 'components.d.ts'), // 指定自动导入组件TS类型声明文件路径 // [!code ++]
		}), // [!code ++]
	],
	//路径别名
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
});
```

##### 自动导入效果

- 运行项目 `npm run dev` 自动

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20241031/image.8s372o6kk2.7lk015gbk3.jpg)


## 整合 Element Plus

- [element plus 按需自动导入](https://element-plus.org/zh-CN/guide/quickstart.html)

##### 安装 Element Plus

```sh
npm install element-plus --save
```

##### vite.config.ts 配置

```ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// 引入path模块
import path from 'path';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';// [!code ++]

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			// 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
			imports: ['vue'],
			dts: path.resolve(path.resolve(__dirname, 'src'), 'auto-imports.d.ts'), // 指定自动导入函数TS类型声明文件路径
			resolvers: [ElementPlusResolver()],// [!code ++]
		}),
		Components({
			dts: path.resolve(path.resolve(__dirname, 'src'), 'components.d.ts'), // 指定自动导入组件TS类型声明文件路径,
			resolvers: [ElementPlusResolver()],// [!code ++]
		}),
	],
	//路径别名
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
});

```

##### 安装自动导入 Icon 依赖

```sh
npm install @element-plus/icons-vue 
npm i -D unplugin-icons
npm i -D unplugin-auto-import
```

##### vite.config.ts 配置

```ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// 引入path模块
import path from 'path';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
//  ElementPlus的Icon自动导入 // [!code ++]
import Icons from 'unplugin-icons/vite'; // [!code ++]
import IconsResolver from 'unplugin-icons/resolver'; // [!code ++]

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			// 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
			imports: ['vue'],
			dts: path.resolve(path.resolve(__dirname, 'src'), 'auto-imports.d.ts'), // 指定自动导入函数TS类型声明文件路径
			resolvers: [
				// 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
				ElementPlusResolver(),
			],
		}),
		Components({
			dts: path.resolve(path.resolve(__dirname, 'src'), 'components.d.ts'), // 指定自动导入组件TS类型声明文件路径,
			resolvers: [
				ElementPlusResolver(),
				// 自动注册图标组件
				IconsResolver({ // [!code ++]
					// 修改Icon组件前缀，prefix不设置则默认为i,禁用则设置为false // [!code ++]
					// prefix: 'i', // [!code ++]
					// 指定collection，即指定为elementplus图标集ep // [!code ++]
					enabledCollections: ['ep'], // [!code ++]
				}),
			],
		}),
		// Icons图标自动下载 // [!code ++]
		Icons({ // [!code ++]
			autoInstall: true, // [!code ++]
		}),// [!code ++]
	],
	//路径别名
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
});
```

##### icon 用法


```html
<div>
  <el-button type="success"><i-ep-SuccessFilled />Success</el-button>
  <el-button type="info"><i-ep-InfoFilled />Info</el-button>
  <el-button type="warning"><i-ep-WarningFilled />Warning</el-button>
  <el-button type="danger"><i-ep-WarnTriangleFilled />Danger</el-button>
</div>
```



## 整合 Vant


- [vant 按需自动导入](https://vant.pro/vant/#/zh-CN/quickstart)

##### 安装最新版 Vant

```sh
npm i vant
```
##### 按需引入组件样式

```sh
npm i @vant/auto-import-resolver unplugin-vue-components unplugin-auto-import -D
```

##### vite.config.ts 配置

```ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// 引入path模块
import path from 'path';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
//  ElementPlus的Icon自动导入
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';

import { VantResolver } from '@vant/auto-import-resolver'; // [!code ++]

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			// 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
			imports: ['vue'],
			dts: path.resolve(path.resolve(__dirname, 'src'), 'auto-imports.d.ts'), // 指定自动导入函数TS类型声明文件路径
			resolvers: [
				// 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
				ElementPlusResolver(),
				// 自动导入vant // [!code ++]
				VantResolver(), // [!code ++]
			],
		}),
		Components({
			dts: path.resolve(path.resolve(__dirname, 'src'), 'components.d.ts'), // 指定自动导入组件TS类型声明文件路径,
			resolvers: [
				ElementPlusResolver(),
				// 自动注册图标组件
				IconsResolver({
					// 修改Icon组件前缀，prefix不设置则默认为i,禁用则设置为false
					// prefix: 'i',
					// 指定collection，即指定为elementplus图标集ep
					enabledCollections: ['ep'],
				}),
				// 自动注册vant // [!code ++]
				VantResolver(), // [!code ++]
			],
		}),
		// Icons图标自动下载
		Icons({
			autoInstall: true,
		}),
	],
	//路径别名
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
});

```


##### 浏览器适配

- [Viewport 布局](https://vant.pro/vant/#/zh-CN/advanced-usage#viewport-bu-ju)

##### 安装插件

```sh
// postcss-px-to-viewport 是一款 PostCSS 插件，用于将 px 单位转化为 vw/vh 单位。
npm install postcss-px-to-viewport --save-dev
```

- 创建portcss.config.js文件，和package.json平级

```js
// postcss.config.js
export default {
    plugins: {
      'postcss-px-to-viewport': {
        viewportWidth: 750, // 设计稿宽度
        exclude: [/node_modules\/vant/] // 这里排除对vant的转换
      },
    },
};
```

- [Rem 布局适配](https://vant.pro/vant/#/zh-CN/advanced-usage#rem-bu-ju-gua-pei)

##### 安装插件

```sh
npm install postcss postcss-pxtorem --save-dev
npm i -S amfe-flexible
```

#####  main.ts

```ts
// rem布局
import 'amfe-flexible';
```


- 创建portcss.config.js文件，和package.json平级

```js
// postcss.config.js
export default{
  plugins: {
    // postcss-pxtorem 插件的版本需要 >= 5.0.0
    'postcss-pxtorem': {
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75;
      },
      propList: ['*'],
    },
  },
};
```

## 整合 SVG 图标

> 通过[vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons) 插件整合 Iconfont 第三方图标库实现本地图标

- [ vite-plugin-svg-icons 安装文档](https://github.com/vbenjs/vite-plugin-svg-icons/blob/main/README.zh_CN.md)

##### 安装插件

```sh
npm install fast-glob
npm i vite-plugin-svg-icons -D
```

##### 创建 src/assets/icons 目录 , 放入从 Iconfont 复制的 svg 图标

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240918/image.9gwj41pgxo.png)


##### 在 src/main.ts 内引入注册脚本

```sh
import 'virtual:svg-icons-register'
```

##### SVG 组件封装

```html
<!-- src/components/SvgIcon/index.vue -->
<script setup lang="ts">
const props = defineProps({
  prefix: {
    type: String,
    default: "icon",
  },
  iconClass: {
    type: String,
    required: false,
  },
  color: {
    type: String,
  },
  size: {
    type: String,
    default: "1em",
  },
});

const symbolId = computed(() => `#${props.prefix}-${props.iconClass}`);
</script>

<template>
  <svg
    aria-hidden="true"
    class="svg-icon"
    :style="'width:' + size + ';height:' + size"
  >
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<style scoped>
.svg-icon {
  display: inline-block;
  outline: none;
  width: 1em;
  height: 1em;
  vertical-align: -0.15em; /* 因icon大小被设置为和字体大小一致，而span等标签的下边缘会和字体的基线对齐，故需设置一个往下的偏移比例，来纠正视觉上的未对齐效果 */
  fill: currentColor; /* 定义元素的颜色，currentColor是一个变量，这个变量的值就表示当前元素的color值，如果当前元素未设置color值，则从父元素继承 */
  overflow: hidden;
}
</style>
```

##### vite.config.ts 配置插件

```ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// 引入path模块
import path from 'path';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
//  ElementPlus的Icon自动导入
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';

import { VantResolver } from '@vant/auto-import-resolver';

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'; // [!code ++]

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			// 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
			imports: ['vue'],
			dts: path.resolve(path.resolve(__dirname, 'src'), 'auto-imports.d.ts'), // 指定自动导入函数TS类型声明文件路径
			resolvers: [
				// 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
				ElementPlusResolver(),
				// 自动导入vant
				VantResolver(),
			],
		}),
		Components({
			dts: path.resolve(path.resolve(__dirname, 'src'), 'components.d.ts'), // 指定自动导入组件TS类型声明文件路径,
			resolvers: [
				ElementPlusResolver(),
				// 自动注册图标组件
				IconsResolver({
					// 修改Icon组件前缀，prefix不设置则默认为i,禁用则设置为false
					// prefix: 'i',
					// 指定collection，即指定为elementplus图标集ep
					enabledCollections: ['ep'],
				}),
				// 自动注册vant
				VantResolver(),
			],
		}),
		// Icons图标自动下载
		Icons({
			autoInstall: true,
		}),
		//用于生成 svg 雪碧图. // [!code ++]
		createSvgIconsPlugin({ // [!code ++]
			// 指定需要缓存的图标文件夹 // [!code ++]
			iconDirs: [path.resolve(__dirname, 'src/assets/icons')], // [!code ++]
			// 指定symbolId格式 // [!code ++]
			symbolId: 'icon-[dir]-[name]', // [!code ++]
		}), // [!code ++]
	],
	//路径别名
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
});
```

##### 组件使用

```html
<template>
 <el-button type="info"><svg-icon icon-class="fullscreen" />SVG 本地图标</el-button>
</template>
```

## 代码统一规范

- Eslint： JavaScript 语法规则和代码风格检查；

- Prettier：全局代码格式化。

### 集成ESLint配置

> 检测代码规范

##### 安装 ESLint 依赖

```sh
npm i -D eslint
```

##### 初始化eslint

```sh
npx eslint --init
```
![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240918/image.8s39k1w2ms.webp)

##### 根目录自动生成的 eslint.config.js 配置内容如下：

```js
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {files: ["**/*.vue"], languageOptions: {parserOptions: {parser: tseslint.parser}}},
];
```
##### ESLint 检测指令

> package.json 添加 eslint 检测指令

```json
"scripts": {
	"lint:eslint": "eslint \"src/**/*.{vue,ts,js}\" --fix"
}
```

##### vscode 安装 ESLint 插件

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240918/image.70aap643rr.webp)

##### 执行 `npm run lint:eslint` 命令

> 报错提示是格式问题

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240918/image.1vylzw4psz.webp)

##### eslint 报错解决

```ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// 引入path模块
import path from "path";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
//  ElementPlus的Icon自动导入
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

import { VantResolver } from "@vant/auto-import-resolver";

import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ["vue"],
      // eslint 报错解决 // [!code ++]
      eslintrc: {  // [!code ++]
        enabled: true, // 是否自动生成 eslint 规则，建议生成之后设置 false，避免重复生成消耗 // [!code ++]
      }, // [!code ++]
      dts: path.resolve(path.resolve(__dirname, "src"), "auto-imports.d.ts"), // 指定自动导入函数TS类型声明文件路径
      resolvers: [
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        ElementPlusResolver(),
        // 自动导入vant
        VantResolver(),
      ],
    }),
    Components({
      dts: path.resolve(path.resolve(__dirname, "src"), "components.d.ts"), // 指定自动导入组件TS类型声明文件路径,
      resolvers: [
        ElementPlusResolver(),
        // 自动注册图标组件
        IconsResolver({
          // 修改Icon组件前缀，prefix不设置则默认为i,禁用则设置为false
          // prefix: 'i',
          // 指定collection，即指定为elementplus图标集ep
          enabledCollections: ["ep"],
        }),
        // 自动注册vant
        VantResolver(),
      ],
    }),
    // Icons图标自动下载
    Icons({
      autoInstall: true,
    }),
    //用于生成 svg 雪碧图.
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(__dirname, "src/assets/icons")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]",
    }),
  ],
  //路径别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
```

##### 运行项目，根目录会多一个`eslintrc-auto-import.json`文件

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240918/image.3uusqcfndi.webp)

##### eslint.config.js  配置规则

```js
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';

import { readFile } from 'node:fs/promises';
/**
 * 由于安装了autoimport 插件，所以，需要引入.eslintrc-auto-import.json 来完善eslint以免不必要的报错
 * 如果没有使用autoimport ，就不需要引入了
 * @description:
 * @return {*}
 */
const autoImportFile = new URL('./.eslintrc-auto-import.json', import.meta.url);
const autoImportGlobals = JSON.parse(await readFile(autoImportFile, 'utf8'));

export default [
    { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
    {
        languageOptions: {
            globals: { ...globals.browser, ...autoImportGlobals.globals }
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs['flat/essential'],
    {
        files: ['**/*.vue'],
        languageOptions: { parserOptions: { parser: tseslint.parser } }
    },
    //添加自定义规则
    {
        rules: {
            // eslint（https://eslint.bootcss.com/docs/rules/）
            // 'no-var': 'off', // 要求使用 let 或 const 而不是 var
            // 'no-multiple-empty-lines': ['off', { max: 1 }], // 不允许多个空行
            // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
            // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
            // 'no-unexpected-multiline': 'off', // 禁止空余的多行
            'no-useless-escape': 'off', // 禁止不必要的转义字符
            // 'prefer-const': 'off', // 关闭没有使用const的报错

            // typeScript (https://typescript-eslint.io/rules)
            // '@typescript-eslint/no-unused-vars': 'off', // 禁止定义未使用的变量
            // '@typescript-eslint/no-multiple-empty-lines': 'off', // 禁止定义未使用的变量
            // '@typescript-eslint/no-var': 'off', // 禁止定义未使用的变量
            // '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
            // '@typescript-eslint/prefer-const': 'off', // 关闭没有使用const的报错
            '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
            '@typescript-eslint/no-unused-expressions': 'off', // 禁止表达式调用函数
            // '@typescript-eslint/no-non-null-assertion': 'off',
            // '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。
            // '@typescript-eslint/semi': 'off',
            // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
            'vue/multi-word-component-names': 'off' // 要求组件名称始终为 “-” 链接的单词
            // 'vue/script-setup-uses-vars': 'off', // 防止<script setup>使用的变量<template>被标记为未使用
            // 'vue/no-mutating-props': 'off', // 不允许组件 prop的改变
            // 'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
        }
    }
];
```

##### 再次运行 pm run lint:eslint 命令

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240918/image.2yybawbcnj.webp)

### 集成Prettier配置

> 修复代码格式

##### 安装Prettier

```sh
npm i prettier -D
```

##### VScode  安装 Prettier 插件

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240918/image.1hs691gmu1.webp)

##### 创建并配置.prettierrc.js配置文件

```js
// @see: https://www.prettier.cn
//此处的规则供参考，其中多半其实都是默认值，可以根据个人习惯改写
export default {
    printWidth: 160, // 单行输出（不折行）的（最大）长度
    tabWidth: 4, // 每个缩进级别的空格数
    semi: true, // 是否在语句末尾打印分号
    singleQuote: true, // 是否使用单引号
    quoteProps: 'as-needed', // 仅在需要时在对象属性周围添加引号
    bracketSpacing: true, // 是否在对象属性添加空格
    htmlWhitespaceSensitivity: 'ignore', // 指定 HTML 文件的全局空白区域敏感度, "ignore" - 空格被认为是不敏感的
    trailingComma: 'none', // 去除对象最末尾元素跟随的逗号
    useTabs: false, // 不使用缩进符，而使用空格
    jsxSingleQuote: false, // jsx 不使用单引号，而使用双引号
    // arrowParens: 'always', // 箭头函数，只有一个参数的时候，也需要括号
    rangeStart: 0, // 每个文件格式化的范围是文件的全部内容
    proseWrap: 'always', // 当超出print width（上面有这个参数）时就折行
    endOfLine: 'lf', // 换行符使用 lf
};
```

##### package.json 添加 prettier 格式化指令

```json
"scripts": {
	"lint:prettier": "prettier --write \"**/*.{js,ts,json,css,less,scss,vue,html,md}\""
}
```

##### 执行 `npm run lint:prettier` 命令

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240918/image.6bh156dkmo.webp)


##### 配置VScode保存时自动格式化代码


![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240918/image.6t72trjpai.webp)


### 配置vite运行的时候自动检测eslint规范

> vite运行的时候默认是不会自动检测eslint规范的，而执行npm run lint命令时却可以看到有eslint的警告信息。

> 如果想要vite运行的时候自动检测eslint规范，只需要安装vite-plugin-eslint依赖和添加相关配置即可。

##### 安装vite-plugin-eslint

```sh
npm install vite-plugin-eslint -D
```

##### 配置 vite.config.ts文件

```ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// 引入path模块
import path from 'path';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
//  ElementPlus的Icon自动导入
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';

import { VantResolver } from '@vant/auto-import-resolver';

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// vite加入编译eslint错误提示 // [!code ++]
import eslintPlugin from 'vite-plugin-eslint'; // [!code ++]

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
         // 配置vite在运行的时候自动检测eslint规范 // [!code ++]
        eslintPlugin({ // [!code ++]
            cache: false, // 不缓存结果，每次都检查 // [!code ++]
            include: ['src/**/*.ts', 'src/**/*.js', 'src/**/*.vue', 'src/*.ts', 'src/*.js', 'src/*.vue'] // [!code ++]
        }), // [!code ++]
        AutoImport({
            // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
            imports: ['vue'],
            // eslint 报错解决
            eslintrc: {
                enabled: false // 是否自动生成 eslint 规则，建议生成之后设置 false，避免重复生成消耗
            },
            dts: path.resolve(path.resolve(__dirname, 'src'), 'auto-imports.d.ts'), // 指定自动导入函数TS类型声明文件路径
            resolvers: [
                // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
                ElementPlusResolver(),
                // 自动导入vant
                VantResolver()
            ]
        }),
        Components({
            dts: path.resolve(path.resolve(__dirname, 'src'), 'components.d.ts'), // 指定自动导入组件TS类型声明文件路径,
            resolvers: [
                ElementPlusResolver(),
                // 自动注册图标组件
                IconsResolver({
                    // 修改Icon组件前缀，prefix不设置则默认为i,禁用则设置为false
                    // prefix: 'i',
                    // 指定collection，即指定为elementplus图标集ep
                    enabledCollections: ['ep']
                }),
                // 自动注册vant
                VantResolver()
            ]
        }),
        // Icons图标自动下载
        Icons({
            autoInstall: true
        }),
        //用于生成 svg 雪碧图.
        createSvgIconsPlugin({
            // 指定需要缓存的图标文件夹
            iconDirs: [path.resolve(__dirname, 'src/assets/icons')],
            // 指定symbolId格式
            symbolId: 'icon-[dir]-[name]'
        })
    ],
    //路径别名
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
});
```

## Git 提交规范

###  配置husky+lint-staged

- Husky + Lint-staged 整合实现 Git 提交前代码规范检测/格式化

> husky 是一个 Git 钩子（Git hooks）工具，它可以在项目中植入你设定的 git hooks，在 git 提交代码的前后，你预设的 git hooks 可以得到执行，以对代码、文件等进行预设的检查，一旦检查不通过，就可以阻止当前的代码提交，避免了不规范的代码和 git 提交出现在项目中。

> lint-staged 是一个专门用于在通过 git 提交代码之前，对暂存区的代码执行一系列的格式化。当 lint-staged 配合 git hooks 使用时，可以在 git 提交前的 hook 中加入 lint-staged 命令，这样就能在提交代码之前，对即将提交的代码进行格式化，成功之后就会提交代码。


##### 安装 husky 

- [官网](https://typicode.github.io/husky/zh/get-started.html)

```sh
npm install --save-dev husky
```

##### 使用 husky-init 命令一次性完成依赖自动安装和配置

```sh
npx husky init
```

- 自动生成的 .husky 目录和指令：

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240918/image.sywp91kyw.webp)


##### 安装  Lint-staged


- [官网](https://github.com/lint-staged/lint-staged)


```sh
npm install --save-dev lint-staged
```
##### Lint-staged 配置

- package.json 中添加不同文件在 git 提交执行的 lint 检测配置

```js
"lint-staged": {
    "*.{vue,ts,js}": [
        "eslint --fix",
        "prettier --write"
    ],
    "*.{js,ts,json,css,scss,vue,html,md}": [
        "prettier --write"
    ]
},
```


##### 添加 lint-staged 指令

- package.json 的 scripts 添加 lint-staged 指令

```js
"scripts": {
  "lint:lint-staged": "lint-staged"
}
```

##### 修改提交前钩子命令

- 根目录 .husky 目录下 pre-commit 文件中的 npm test 修改为 npm run lint:lint-staged

```js
#npm test
npm run lint:lint-staged
```

##### Git 提交代码检测

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240918/image.2yybb16omb.webp)


###  配置Commitlint

- Husky + Commitlint + Commitizen + cz-git 整合实现生成规范化且高度自定义的 Git commit message。


##### Commitlint 安装

- [官方安装文档](https://commitlint.js.org/guides/getting-started.html)

```sh
npm install --save-dev @commitlint/config-conventional @commitlint/cli
```

##### Commitlint 配置

- 根目录创建 commitlint.config.js 配置文件

```js
export default {
    // 继承的规则
    extends: ['@commitlint/config-conventional'],
    // @see: https://commitlint.js.org/#/reference-rules
    rules: {
        'subject-case': [0], // subject大小写不做校验

        // 类型枚举，git提交type必须是以下类型
        'type-enum': [
            2,
            'always',
            [
                'feat', // 新增功能
                'fix', // 修复缺陷
                'docs', // 文档变更
                'style', // 代码格式（不影响功能，例如空格、分号等格式修正）
                'refactor', // 代码重构（不包括 bug 修复、功能新增）
                'perf', // 性能优化
                'test', // 添加疏漏测试或已有测试改动
                'build', // 构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）
                'ci', // 修改 CI 配置、脚本
                'revert', // 回滚 commit
                'chore' // 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）
            ]
        ]
    }
};
```

##### 添加提交信息校验钩子

- 执行下面命令生成 commint-msg 钩子用于 git 提交信息校验

```sh
echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg
```

##### 生成的配置如下：

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240918/image.2yybb25mlz.webp)

::: danger 提示
- 我在git commit时，发生了以下错误：

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240918/image.70aaph79xx.webp)

```js
.husky/commit-msg: .husky/commit-msg: cannot execute binary file
husky - commit-msg script failed (code 126)
```
- 解决办法：
> 右下角文件编码那里，你的commit-msg默认是utf-16，改成utf-8就可以了。错误信息有告诉你无法执行binary文件，一般这种错误都跟编码有关
:::

##### Commitlint 验证

- 正确的提交格式：`<type>(<scope>): <subject>` ，type 和 subject 默认必填

| 不规范的 commit msg，提交失败        |      规范的 commit msg，提交成功      | 
| ------------- | :-----------: |
| ![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240918/image.8ojnmny4va.webp)      | ![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240918/image.175cg6pd4n.webp) |


### Commitizen & cz-git

- [commitizen官方文档](https://github.com/commitizen/cz-cli)
> commitizen: 基于Node.js的 git commit 命令行工具，辅助生成标准化规范化的 commit message

- [cz-git官方文档](https://cz-git.qbb.sh/zh/)
> cz-git: 一款工程性更强，轻量级，高度自定义，标准输出格式的 commitizen 适配器


##### Commitizen & cz-git 安装

```sh
npm install -D commitizen cz-git
```

##### cz-git 配置

- 修改 package.json 指定使用的适配器

```js
"config": {
  "commitizen": {
    "path": "node_modules/cz-git"
  }
}
```

##### cz-git 与 commitlint 进行联动给予校验信息

```js
export default {
    // 继承的规则
    extends: ['@commitlint/config-conventional'],
    // @see: https://commitlint.js.org/#/reference-rules
    rules: {
        'subject-case': [0], // subject大小写不做校验

        // 类型枚举，git提交type必须是以下类型
        'type-enum': [
            2,
            'always',
            [
                'feat', // 新增功能
                'fix', // 修复缺陷
                'docs', // 文档变更
                'style', // 代码格式（不影响功能，例如空格、分号等格式修正）
                'refactor', // 代码重构（不包括 bug 修复、功能新增）
                'perf', // 性能优化
                'test', // 添加疏漏测试或已有测试改动
                'build', // 构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）
                'ci', // 修改 CI 配置、脚本
                'revert', // 回滚 commit
                'chore' // 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）
            ]
        ]
    },
    // 以下为新增内容
    prompt: {
        messages: {
            type: '选择你要提交的类型 :',
            scope: '选择一个提交范围（可选）:',
            customScope: '请输入自定义的提交范围 :',
            subject: '填写简短精炼的变更描述 :\n',
            body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
            breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
            footerPrefixesSelect: '选择关联issue前缀（可选）:',
            customFooterPrefix: '输入自定义issue前缀 :',
            footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
            generatingByAI: '正在通过 AI 生成你的提交简短描述...',
            generatedSelectByAI: '选择一个 AI 生成的简短描述:',
            confirmCommit: '是否提交或修改commit ?'
        },
        // prettier-ignore
        types: [
        { value: "feat",     name: "特性:     ✨  新增功能", emoji: ":sparkles:" },
        { value: "fix",      name: "修复:     🐛  修复缺陷", emoji: ":bug:" },
        { value: "docs",     name: "文档:     📝  文档变更", emoji: ":memo:" },
        { value: "style",    name: "格式:     💄  代码格式（不影响功能，例如空格、分号等格式修正）", emoji: ":lipstick:" },
        { value: "refactor", name: "重构:     ♻️  代码重构（不包括 bug 修复、功能新增）", emoji: ":recycle:" },
        { value: "perf",     name: "性能:     ⚡️  性能优化", emoji: ":zap:" },
        { value: "test",     name: "测试:     ✅  添加疏漏测试或已有测试改动", emoji: ":white_check_mark:"},
        { value: "build",    name: "构建:     📦️  构建流程、外部依赖变更（如升级 npm 包、修改 vite 配置等）", emoji: ":package:"},
        { value: "ci",       name: "集成:     🎡  修改 CI 配置、脚本",  emoji: ":ferris_wheel:"},
        { value: "revert",   name: "回退:     ⏪️  回滚 commit",emoji: ":rewind:"},
        { value: "chore",    name: "其他:     🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）", emoji: ":hammer:"},
      ],
        useEmoji: true,
        emojiAlign: 'center',
        useAI: false,
        aiNumber: 1,
        themeColorCode: '',
        scopes: [],
        allowCustomScopes: true,
        allowEmptyScopes: true,
        customScopesAlign: 'bottom',
        customScopesAlias: 'custom',
        emptyScopesAlias: 'empty',
        upperCaseSubject: false,
        markBreakingChangeMode: false,
        allowBreakingChanges: ['feat', 'fix'],
        breaklineNumber: 100,
        breaklineChar: '|',
        skipQuestions: [],
        issuePrefixes: [{ value: 'closed', name: 'closed:   ISSUES has been processed' }],
        customIssuePrefixAlign: 'top',
        emptyIssuePrefixAlias: 'skip',
        customIssuePrefixAlias: 'custom',
        allowCustomIssuePrefix: true,
        allowEmptyIssuePrefix: true,
        confirmColorize: true,
        maxHeaderLength: Infinity,
        maxSubjectLength: Infinity,
        minSubjectLength: 0,
        scopeOverrides: undefined,
        defaultBody: '',
        defaultIssues: '',
        defaultScope: '',
        defaultSubject: ''
    }
};
```

##### 添加提交指令

- package.json 添加 commit 指令

```js
"scripts": {
    "commit": "git-cz"
}
```

##### cz-git 验证

- 执行 commit 指令进行代码提交流程，执行前需将改动的文件通过 git add 添加到暂存区

```sh
npm run commit
```

- 执行命令之后会出现询问交互

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240918/image.6f0n3776uz.webp)

- 根据提示一步步的完善 commit msg 信息

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240918/image.175cg834fa.webp)


## 代码参考

- [https://github.com/squid-Xu/norm](https://github.com/squid-Xu/norm)