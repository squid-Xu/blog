# 给博客添加评论功能

- 加个评论，感觉上升一个档次（反正也没人用哈哈哈~~~）

### 插件地址

[https://github.com/giscus/giscus-component](https://github.com/giscus/giscus-component)

### 效果

- 页面底部可查看

### 准备工作

#### 1、新建一个公开的仓库

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240731/image.7egoidvoeh.webp)

#### 2、找到仓库中的 Settings 设置，勾选 Discussions，并点击 Set up discussions，开启评论区

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240731/image.4uau5qz912.webp)

#### 3、安装 [Giscus App](https://github.com/apps/giscus)

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240731/image.175ai862qw.webp)

#### 4、选择刚刚创建好的仓库，点击保存

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240731/image.8kzzqztwvn.webp)

#### 5、前往 [Giscus](https://giscus.app/zh-CN) 页面，只需要填写仓库名称和 Discussion 分类

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240731/image.8kzzqzyvqp.webp)

#### 6、获取 data-repo, data-repo-id, data-category 和 data-category-id 这四个属性

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240731/image.92q1fl272n.webp)

### 安装使用

#### 1、安装依赖

```sh
npm i @giscus/vue
```

#### 2、添加代码

- 封装一个 comment.vue 的组件

```js
<template>
	<div class="comments">
		<Giscus
			v-if="showComment"
			:repo="giscusConfig.repo"
			:repo-id="giscusConfig.repoId"
			:category="giscusConfig.category"
			:category-id="giscusConfig.categoryId"
			:mapping="giscusConfig.mapping"
			:reactions-enabled="giscusConfig.reactionsEnabled"
			:emit-metadata="giscusConfig.emitMetadata"
			:input-position="giscusConfig.inputPosition"
			:theme="isDark ? 'dark' : 'light'"
			:lang="giscusConfig.lang"
			:loading="giscusConfig.loading"
		/>
	</div>
</template>
<script lang="ts" setup>
import { reactive, ref, watch, nextTick } from 'vue';
import { useData, useRoute } from 'vitepress';
import Giscus, { type GiscusProps } from '@giscus/vue';

const route = useRoute();

const { isDark } = useData();

// params generate in https://giscus.app/zh-CN
const giscusConfig: GiscusProps = reactive({
	repo: '[在此输入仓库]',
	repoId: '[在此输入仓库 ID]',
	category: '[在此输入分类名]',
	categoryId: '[在此输入分类 ID]',
	mapping: 'url',
	strict: '0',
	reactionsEnabled: '1',
	emitMetadata: '1',
	inputPosition: 'top',
	// theme: isDark.value ? "dark" : "light", // 需要写在页面里面才会有响应式
	lang: 'zh-CN',
	loading: 'lazy',
});

const showComment = ref(true);
watch(
	() => route.path,
	() => {
		showComment.value = false;
		nextTick(() => {
			showComment.value = true;
		});
	},
	{
		immediate: true,
	}
);
</script>
<style>
.comments {
	padding: 20px;
	border-radius: 10px;
}
</style>

```

#### 3、每篇文章底部添加评论

- 使用 doc-after 插槽在每篇文章中增加评论组件

```js
// .vitepress\theme\index.ts
import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';

//评论
import Comment from './components/comment.vue';

export default {
	...DefaultTheme,
	//页面底部增加评论
	Layout: () => {
		return h(DefaultTheme.Layout, null, {
			'doc-after': () => h(Comment),
		});
	},
};

```