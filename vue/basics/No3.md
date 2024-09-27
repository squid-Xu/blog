# 说一下Vue2和Vue3的区别

## 源码的变化
- vue2用js,
- vue3用ts, 所以Vue3更好的支持TS

## 写法上变化

- Vue2: 选项式API;
- Vue3: 组合式API

## 响应式实现

- Vue2是definePropety
- Vue3是proxy

## 生命周期

- Vue2: beforeCreate、created、beforMount、munted、beforeUpdate、updated、beforeDestroy、destroyed;

- Vue3: setup、onBeforeMount、onMounted、onBeforeUpdate、onUpdated、onBeforeUnmount、onUnmounted;

## 实例化

- Vue2: `new Vue()`
- Vue3: `createApp()`

## 组件层面

- Vue3 templete支持多个根标签 Fragments
- Vue3 新增Teleport组件，将组件内部模板挂载到想挂的DOM上
- Vue3 css支持v-bind 绑定变量
- Vue3 新增异步组件 defineAsyncComponent 声明
- Vue3 新增宏：defineEmits、defineModel、defineProps、defineOptions、defineSlots

## 公共逻辑抽离

- Vue2: mixin
- Vue3: hooks

## v-if 和 v-for 优先级的不同

- vue2: v-for比v-if优先
- Vue3: v-if比v-for优先
- 一般不建议v-if和v-for一起使用

## diff 算法优化
- vue3 有静态标记

## 打包体积优化
- Vue更好支持Tree shaking