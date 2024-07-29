import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
				text: '小程序',
				link: '/wechat/',
			},
			{
				text: '总结',
				link: '/summary/',
			},
			{
				text: '生活',
				link: '/live/house/No1',
			},
			{
				text: '工作',
				link: '/work/No1',
			},
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
						{ text: '免费资源', link: '/nav/tool/No2' }
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
					],
				},
			],
			'/live/': [
				{
					text: '买房历程',
					collapsed: false,
					items: [{ text: '七月的第一天', link: '/live/house/No1' }],
				},
			],
		},
		// 最右侧的友情链接小图标
		socialLinks: [{ icon: 'github', link: 'https://github.com/squid-Xu' }],
		// 底部栏定义的内容
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2024-present squid-Xu <img style="display:inline;transform: translateY(4px);" src="https://visitor-badge.laobi.icu/badge?page_id=squid-Xu.blog" alt="visitors">',
		},
		// 添加搜索框 https://xiaoyi1255.github.io/guide/project/algolia
		search: {
			provider: 'algolia',
			options: {
				appId: 'HJSOWH3PPH',
				apiKey: '2618f8fac6e05f71e0f2db49c1e1126f',
				indexName: 'squid-xuio',
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
