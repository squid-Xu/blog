# 介绍一下nextTick

## 为什么需要nextTick?

- vue中数据是同步更新的，视图是异步更新。所有在我们同步代码中修改了数据，是无法访问更新后的DOM。所以官方就提供了nextTick。

- vue中响应式数据改变，不会立即更新DOM，而是更新了vnode,等下一次事件循环才一次性去更新DOM

## nextTick实现原理

- vue2实现

> 判断Promise、MutationObserver、setImmediate、setTimeout兜底

- vue3实现：

> Promise.then