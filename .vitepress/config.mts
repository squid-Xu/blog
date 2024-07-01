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
				text: '介绍一下吧',
				link: '/guide/',
			},
			{
				text: '生活',
				link: '/live/',
			},
		],

		sidebar: {
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

		socialLinks: [{ icon: 'github', link: 'https://github.com/squid-Xu' }],
	},
});
