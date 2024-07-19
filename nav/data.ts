import type { NavLink } from './type';

type NavData = {
	title: string;
	items: NavLink[];
};

export const NAV_DATA: NavData[] = [
	{
		title: '常用工具',
		items: [
			{
				icon: 'https://squid-xu.github.io/blog/logo.gif',
				title: '测试',
				desc: '测试描述',
				link: 'https://squid-xu.github.io/blog/',
			},
		],
	},
];
