import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
import mediumZoom from 'medium-zoom';
import CustomLayout from './layouts/CustomLayout.vue';
import Comment from './components/Comment.vue';
import LockedPage from './components/LockedPage.vue';

import './index.css';

export default {
	...DefaultTheme,
	//页面底部增加评论
	Layout: () => {
		return h(DefaultTheme.Layout, null, {
			'doc-after': () => h(Comment),
		});
	},
	//自定义页面布局
	enhanceApp({ app }) {
		app.component('CustomLayout', CustomLayout);
		app.component('LockedPage', LockedPage);
	},
	// 增加文章图片放大
	setup() {
		const route = useRoute();
		const initZoom = () => {
			mediumZoom('.main img:not(.icon-img)', { background: 'var(--vp-c-bg)' });
		};
		onMounted(() => {
			initZoom();
		});
		watch(
			() => route.path,
			() => nextTick(() => initZoom())
		);
	},
};
