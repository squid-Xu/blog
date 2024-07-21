import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
import mediumZoom from 'medium-zoom';
import CustomLayout from './layouts/CustomLayout.vue';
import comment from './components/comment.vue';

import './index.css';

export default {
	...DefaultTheme,
	Layout: () => {
		return h(DefaultTheme.Layout, null, {
			'doc-after': () => h(comment),
		});
	},
	enhanceApp({ app }) {
		app.component('CustomLayout', CustomLayout);
	},

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