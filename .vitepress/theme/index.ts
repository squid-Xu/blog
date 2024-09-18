import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';
import { useRoute } from 'vitepress';

// 加载css
import './index.css';

//评论
import Comment from './components/comment.vue';
//导航布局
import NavMenu from './components/NavMenu.vue';

// 图片放大/预览
import 'viewerjs/dist/viewer.min.css';
import imageViewer from 'vitepress-plugin-image-viewer';
// 如需按钮点击预览图片
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';

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
		// 注册全局组件，如果你不想使用也可以不添加
		app.component('vImageViewer', vImageViewer);
		app.component('NavMenu', NavMenu);
	},
	setup() {
		// 获取路由
		const route = useRoute();
		// 使用
		imageViewer(route);
	},
};
