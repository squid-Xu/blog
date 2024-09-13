import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	// 应用级配置选项
	lang: 'zh-CN',
	base: '/blog/',
	title: '麻辣鱿鱼徐',
	head: [['link', { rel: 'icon', href: '/blog/favicon.ico' }]],
	description: '麻辣鱿鱼徐 | 个人博客',
	themeConfig: {
		logo: '/logo.gif',
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{
				text: '导航',
				link: '/nav/front/No1',
			},
			{
				text: 'JavaScript',
				link: '/javascript/basics/No1',
			},
			// {
			// 	text: 'HTML',
			// 	link: '/html/',
			// },
			// {
			// 	text: 'CSS',
			// 	link: '/css/',
			// },
			// {
			// 	text: 'Vue2',
			// 	link: '/vue2/',
			// },
			// {
			// 	text: 'Vue3',
			// 	link: '/vue3/',
			// },
			// {
			// 	text: 'React',
			// 	link: '/react/',
			// },
			{
				text: 'Promise',
				link: '/promise/basics/No1',
			},
			{
				text: 'TypeScript',
				link: '/typescript/basics/No1',
			},
			{
				text: 'VitePress',
				link: '/vitepress/basics/No1',
			},
			{
				text: 'ECMAScript',
				link: '/ecmascript/basics/No1',
			},
			{
				text: 'Axios',
				link: '/axios/basics/No1',
			},
			{
				text: '项目案例',
				link: '/case/No1',
			},
			{
				text: '总结',
				link: '/summary/wechat/No1',
			},
			{
				text: '生活',
				link: '/live/house/No1',
			},
			// {
			// 	text: '工作',
			// 	link: '/work/No1',
			// },
		],
		// 定义侧边栏
		sidebar: {
			'/nav/': [
				{
					text: '前端导航',
					collapsed: false,
					items: [
						{ text: 'Vue生态', link: '/nav/front/No1' },
						{ text: 'React生态', link: '/nav/front/No2' },
						{ text: 'Node.js生态', link: '/nav/front/No3' },
					],
				},
				{
					text: '常用工具',
					collapsed: false,
					items: [
						{ text: '开放数据', link: '/nav/tool/No1' },
						{ text: '免费资源', link: '/nav/tool/No2' },
						{ text: 'Ai工具', link: '/nav/tool/No3' },
					],
				},
				{
					text: '面试必备',
					collapsed: false,
					items: [{ text: '刷题宝典', link: '/nav/interview/No1' }],
				},
				{
					text: '前端文档',
					collapsed: false,
					items: [{ text: 'TypeScript', link: '/nav/document/No1' }],
				},
				{
					text: '大前端',
					collapsed: false,
					items: [{ text: '优秀的大前端Leader', link: '/nav/excellent/No1' }],
				},
			],
			'/javascript/': [
				{
					text: '基础',
					collapsed: false,
					items: [
						{ text: '1. 简介', link: '/javascript/basics/No1' },
						{ text: '2. 语法', link: '/javascript/basics/No2' },
						{ text: '3. 字面量和变量', link: '/javascript/basics/No3' },
						{ text: '4. 标识符', link: '/javascript/basics/No4' },
						{ text: '5. 字符串', link: '/javascript/basics/No5' },
						{ text: '6. Number', link: '/javascript/basics/No6' },
						{ text: '7. 布尔值', link: '/javascript/basics/No7' },
						{ text: '8. Null和Undefined', link: '/javascript/basics/No8' },
						{ text: '9. 强制类型转换', link: '/javascript/basics/No9' },
						{ text: '10. 其他进制的数据', link: '/javascript/basics/No10' },
						{ text: '11. 算数运算符', link: '/javascript/basics/No11' },
					],
				},
			],
			'/promise/': [
				{
					text: '基础',
					collapsed: false,
					items: [
						{ text: '1. 介绍与基本使用', link: '/promise/basics/No1' },
						{ text: '2. 初体验', link: '/promise/basics/No2' },
						{ text: '3. 实践练习-fs读取文件', link: '/promise/basics/No3' },
						{ text: '4. 实践练习-AJAX请求', link: '/promise/basics/No4' },
					],
				},
				{
					text: 'Promise API',
					collapsed: false,
					items: [
						{ text: '1. Promise 状态是什么', link: '/promise/api/No1' },
						{ text: '2. Promise 的基本流程', link: '/promise/api/No2' },
						{ text: '3. 如何使用Promise', link: '/promise/api/No3' },
						{ text: '4. Promise Api 方法', link: '/promise/api/No4' },
					],
				},
				{
					text: 'Promise 总结',
					collapsed: false,
					items: [
						{ text: '1. Promise 关键问题', link: '/promise/summary/No1' },
						{ text: '2. Promise 自定义封装', link: '/promise/summary/No2' },
						{ text: '3. async 和 await', link: '/promise/summary/No3' },
					],
				},
			],
			'/typescript/': [
				{
					text: '基础',
					collapsed: false,
					items: [
						{ text: '1. TS简介', link: '/typescript/basics/No1' },
						{ text: '2. TS类型', link: '/typescript/basics/No2' },
					],
				},
				{
					text: '实践',
					collapsed: false,
					items: [
						{ text: '1. 索引签名', link: '/typescript/practice/No1' },
						{ text: '2. TS中泛型 Record＜string, any＞', link: '/typescript/practice/No2' },
					],
				},
			],
			'/vitepress/': [
				{
					text: '总结',
					collapsed: false,
					items: [
						{ text: '1、图片点击放大、预览', link: '/vitepress/basics/No1' },
						{ text: '2、给博客添加评论功能', link: '/vitepress/basics/No2' },
					],
				},
			],
			'/ecmascript/': [
				{
					text: '简介',
					collapsed: false,
					items: [
						{ text: '1、ES介绍', link: '/ecmascript/basics/No1' },
						{ text: '2、名词介绍', link: '/ecmascript/basics/No2' },
					],
				},
				{
					text: 'ES6',
					collapsed: false,
					items: [
						{ text: '1、let', link: '/ecmascript/es6/No1' },
						{ text: '2、const', link: '/ecmascript/es6/No2' },
						{ text: '3、变量的解构赋值', link: '/ecmascript/es6/No3' },
						{ text: '4、模版字符串', link: '/ecmascript/es6/No4' },
						{ text: '5、简化对象写法', link: '/ecmascript/es6/No5' },
						{ text: '6、箭头函数', link: '/ecmascript/es6/No6' },
						{ text: '7、函数参数默认值', link: '/ecmascript/es6/No7' },
						{ text: '8、rest参数', link: '/ecmascript/es6/No8' },
						{ text: '9、扩展运算符', link: '/ecmascript/es6/No9' },
						{ text: '10、Symbol数据类型', link: '/ecmascript/es6/No10' },
						{ text: '11、迭代器（Iterators）', link: '/ecmascript/es6/No11' },
						{ text: '12、生成器（Generators）', link: '/ecmascript/es6/No12' },
						{ text: '13、Proxy与Reflect', link: '/ecmascript/es6/No13' },
						{ text: '14、Promise', link: '/ecmascript/es6/No14' },
						{ text: '15、Set', link: '/ecmascript/es6/No15' },
						{ text: '16、Map', link: '/ecmascript/es6/No16' },
						{ text: '17、类（‌class）‌', link: '/ecmascript/es6/No17' },
						{ text: '18、数值扩展', link: '/ecmascript/es6/No18' },
						{ text: '19、对象方法扩展', link: '/ecmascript/es6/No19' },
						{ text: '20、模块化（Modules）', link: '/ecmascript/es6/No20' },
					],
				},
				{
					text: 'ES7',
					collapsed: false,
					items: [
						{ text: '1、Array.prototype.includes', link: '/ecmascript/es7/No1' },
						{ text: '2、指数操作符 ** 幂', link: '/ecmascript/es7/No2' },
					],
				},
				{
					text: 'ES8',
					collapsed: false,
					items: [
						{ text: '1、async 和 await', link: '/ecmascript/es8/No1' },
						{ text: '2、Object.values/Object.entries', link: '/ecmascript/es8/No2' },
						{ text: '3、Object.getOwnPropertyDescriptors()', link: '/ecmascript/es8/No3' },
						{ text: '4、字符串补全', link: '/ecmascript/es8/No4' },
						{ text: '5、参数列表支持尾逗号', link: '/ecmascript/es8/No5' },
					],
				},
				{
					text: 'ES9',
					collapsed: false,
					items: [
						{ text: '1、扩展运算符 Rest/Spread 属性', link: '/ecmascript/es9/No1' },
						{ text: '2、正则扩展', link: '/ecmascript/es9/No2' },
						{ text: '3、dotAll模式', link: '/ecmascript/es9/No3' },
						{ text: '4、for-await-of 异步迭代', link: '/ecmascript/es9/No4' },
						{ text: '5、Promise.finally', link: '/ecmascript/es9/No5' },
					],
				},
				{
					text: 'ES10',
					collapsed: false,
					items: [
						{ text: '1、Object.fromEntries()', link: '/ecmascript/es10/No1' },
						{ text: '2、字符串扩展 trimStart() 和 trimEnd()', link: '/ecmascript/es10/No2' },
						{ text: '3、数组方式扩展 flat() 和 flatMap()', link: '/ecmascript/es10/No3' },
						{ text: '4、Symbol.prototype.description', link: '/ecmascript/es10/No4' },
						{ text: '5、可选的 catch 参数', link: '/ecmascript/es10/No5' },
					],
				},
				{
					text: 'ES11',
					collapsed: false,
					items: [
						{ text: '1、Promise.allSettled', link: '/ecmascript/es11/No1' },
						{ text: '2、String.prototype.matchAll', link: '/ecmascript/es11/No2' },
						{ text: '3、可选链操作符 Optional chaining', link: '/ecmascript/es11/No3' },
						{ text: '4、动态import()', link: '/ecmascript/es11/No4' },
						{ text: '5、BigInt', link: '/ecmascript/es11/No5' },
						{ text: '6、globalThis', link: '/ecmascript/es11/No6' },
						{ text: '7、空值合并', link: '/ecmascript/es11/No7' },
					],
				},
				{
					text: 'ES12',
					collapsed: false,
					items: [
						{ text: '1、String.prototype.replaceAll', link: '/ecmascript/es12/No1' },
						{ text: '2、Promise.any & AggregateError', link: '/ecmascript/es12/No2' },
						{ text: '3、WeakRefs', link: '/ecmascript/es12/No3' },
						{ text: '4、逻辑赋值运算符', link: '/ecmascript/es12/No4' },
						{ text: '5、数字分隔符', link: '/ecmascript/es12/No5' },
					],
				},
				{
					text: 'ES13',
					collapsed: false,
					items: [
						{ text: '1、类私有属性', link: '/ecmascript/es13/No1' },
						{ text: '2、私有字段检查', link: '/ecmascript/es13/No2' },
						{ text: '3、顶层 await', link: '/ecmascript/es13/No3' },
						{ text: '4、.at 方法返回指定索引的元素', link: '/ecmascript/es13/No4' },
						{ text: '5、Object.hasOwn()', link: '/ecmascript/es13/No5' },
					],
				},
				{
					text: 'ES14',
					collapsed: false,
					items: [{ text: '1、Array 支持从尾部查找', link: '/ecmascript/es14/No1' }],
				},
			],
			'/axios/': [
				{
					text: '总结',
					collapsed: false,
					items: [
						{ text: '1、axios封装', link: '/axios/basics/No1' },
						{ text: '2、axios 是否可以取消请求', link: '/axios/basics/No2' },
					],
				},
			],
			'/case/': [
				{ text: '家族图谱', link: '/case/No1' },
				{ text: 'css实现围绕中心进行圆形旋转', link: '/case/No2' },
				{ text: 'uni-app制作APP壳子', link: '/case/No3' },
			],
			'/summary/': [
				{
					text: '微信小程序',
					collapsed: false,
					items: [{ text: '微信小程序 setData 原理', link: '/summary/wechat/No1' }],
				},
				{
					text: 'vue',
					collapsed: false,
					items: [{ text: 'Vue2、Vue3 和 React 中 Diff 算法的区别', link: '/summary/vue/No1' }],
				},
				{
					text: 'h5',
					collapsed: false,
					items: [{ text: '移动端开发自适应配置', link: '/summary/h5/No1' }],
				},
				{
					text: 'css',
					collapsed: false,
					items: [
						{ text: 'BFC 是什么，解决了什么问题', link: '/summary/css/No1' },
						{ text: '清除浮动的方式', link: '/summary/css/No2' },
					],
				},
				{
					text: 'js',
					collapsed: false,
					items: [
						{ text: '防抖和节流', link: '/summary/js/No1' },
						{ text: 'for...in 和 for...of 的区别', link: '/summary/js/No2' },
						{ text: '手写实现 call() apply() bind()函数', link: '/summary/js/No3' },
						{ text: 'new 的过程', link: '/summary/js/No4' },
					],
				},
				{
					text: '浏览器',
					collapsed: false,
					items: [{ text: 'sessionStorage 能在多个标签页之间共享数据吗？', link: '/summary/browser/No1' }],
				},
				{
					text: 'git',
					collapsed: false,
					items: [{ text: 'git回滚和强制提交', link: '/summary/git/No1' }],
				},
				{
					text: 'uni-app',
					collapsed: false,
					items: [{ text: 'uniapp x与uni-app的区别', link: '/summary/uni-app/No1' }],
				},
				{
					text: '其他',
					collapsed: false,
					items: [
						{ text: '阿里云服务器搭建宝塔面板', link: '/summary/other/No1' },
						{ text: '前端包管理工具-npm、yarn与pnpm', link: '/summary/other/No2' },
						{ text: 'elementPlus el-dropdown组件popperjs本地报警告', link: '/summary/other/No3' },
						{ text: '混合APP开发技术选型', link: '/summary/other/No4' },
					],
				},
			],
			'/live/': [
				{
					text: '房奴',
					collapsed: true,
					items: [
						{ text: '七月的第一天', link: '/live/house/No1' },
						{ text: '八月的第一天', link: '/live/house/No2' },
						{ text: '九月的第一天', link: '/live/house/No3' },
					],
				},
				{
					text: '码农',
					collapsed: true,
					items: [{ text: '第一个idea', link: '/live/dream/No1' }],
				},
			],
		},
		// 最右侧的友情链接小图标
		socialLinks: [{ icon: 'github', link: 'https://github.com/squid-Xu' }],
		// 底部栏定义的内容
		footer: {
			message: 'Released under the MIT License.',
			copyright:
				'Copyright © 2024-present squid-Xu <img style="display:inline;transform: translateY(4px);" src="https://visitor-badge.laobi.icu/badge?page_id=squid-Xu.blog" alt="visitors">',
		},
		// 添加搜索框 https://xiaoyi1255.github.io/guide/project/algolia
		search: {
			provider: 'algolia',
			options: {
				appId: 'HJSOWH3PPH',
				apiKey: '2618f8fac6e05f71e0f2db49c1e1126f',
				indexName: 'squid-xuio',
				placeholder: '请输入关键词',
			},
		},
		// 定义文章底部按钮对应的文本标题
		docFooter: {
			prev: '上一篇文章',
			next: '下一篇文章',
		},
		// 编辑链接，具体显示情况见下图
		editLink: {
			pattern: 'https://github.com/squid-Xu/blog/edit/main/:path',
			text: '于GitHub中编辑这一段内容',
		},
		outline: [2, 4],
		// 设置所有aside的标题
		outlineTitle: '目录',
		// 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
		lastUpdatedText: '最后更新', // string
	},
	lastUpdated: true, // string | boolean
	markdown: {
		lineNumbers: true,
	},
});
