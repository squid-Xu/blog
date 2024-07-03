import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	base: '/blog/',
	title: '麻辣鱿鱼徐',
	description: '麻辣鱿鱼徐 | 个人博客',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{
				text: 'JavaScript',
				link: '/javascript/',
			},
			{
				text: 'HTML',
				link: '/html/',
			},
			{
				text: 'CSS',
				link: '/css/',
			},
			{
				text: 'Vue2',
				link: '/vue2/',
			},
			{
				text: 'Vue3',
				link: '/vue3/',
			},
			{
				text: 'React',
				link: '/react/',
			},
			{
				text: '小程序',
				link: '/wechat/',
			},
			{
				text: '总结',
				link: '/summary/',
			},
			// {
			// 	text: '生活',
			// 	link: '/live/',
			// },
		],
		// 定义侧边栏
		sidebar: {
			'/javascript/': [
				{
					text: '总结',
					collapsed: false,
					items: [{ text: 'for...in和for...of的区别', link: '/javascript/summary/No1' }],
				},
			],
			'/live/house/': [
				// {
				// 	text: '买房历程',
				// 	collapsed: true, // collapsed设置默认是否收缩，true为默认收缩
				// 	items: [{ text: '心累', link: '/live/house/course' }],
				// },
				{
					text: '进度照片',
					collapsed: false,
					items: [{ text: '七月', link: '/live/house/picture/july' }],
				},
			],
		},
		// 最右侧的友情链接小图标
		socialLinks: [{ icon: 'github', link: 'https://github.com/squid-Xu' }],
		// 底部栏定义的内容
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2024-present squid-Xu',
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
		// 设置所有aside的标题
		outlineTitle: '目录',
		// 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
		lastUpdatedText: '最后更新', // string
	},
	lastUpdated: true, // string | boolean
});
