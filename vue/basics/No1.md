# 说一下Vue的生命周期

## vue2: 主要八大生命周期


```js
beforeCreate: 实例创建之前，还不能访问data的属性
created：实例创建完成，可以访问data的属性、一般在这个生命周期做数据请求

beforeMount：模板编译之前，还没有挂载到页面上
mounted：模板编译完成，挂载到页面上

// 首次访问页面会执行上面四个生命周期

beforeUpdate ：数据更新之前
updated：数据更新之后

beforeDestroy：实例销毁之前，移除监听事件、定时器等
destroyed：实例销毁之后

deactivated：组件被缓存时调用
activated：组件被激活时调用
```
## vue3

```js
setup()：组件创建之前

onBeforeMount：模板编译之前，还没有挂载到页面上
onMounted：模板编译完成，挂载到页面上

// 首次访问页面会执行上面三个生命周期

onBeforeUpdate ：数据更新之前
onUpdated：数据更新之后

onBeforeUnmount：实例销毁之前，移除监听事件、定时器等
onUnmounted：实例销毁之后

onDeactivated：组件被缓存时调用
onActivated：组件被激活时调用
```

:::tip 问题补充：父子组件的生命周期执行顺序？
- 父：beforeCreate=>created=>beforeMount
- 子：beforeCreate=>created=>beforeMount=>mounted
- 父：mounted
:::