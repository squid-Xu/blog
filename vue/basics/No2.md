# 说一下Vue的响应式原理

## Vue2的响应式原理


- `vue2`的响应式主要是`数据劫持`，结合`发布-订阅者模式`的方式

- 通过`Object.defineProperty()`的方式劫持各个属性的`getter`,`setter`,在数据变化时，通知订阅者，触发响应的回调来实现的。


## Vue3的响应式原理

- `Vue3`的响应式数据常用两个方法：`ref`、`reactive`

- ref：

    > - 基础数据类型：利用`RefImpl`类，监听 `get value()` 和 `set value()`，实现响应式
    > - 引用数据类型：利用`reactive`方法，将引用数据类型转换成响应式数据

- reactive：

- `Vue3`的响应式原理通过`Proxy`数据代理来实现的，`Proxy`可以监听对象和数组的变化，包括新增属性、删除属性、数组下标的变化等


:::tip 问题补充：vue2针对对象和数组怎么处理的？
- 遍历对象所有可枚举属性，进行getter和setter的劫持
- 重写数组方法：push、pop、shift、unshift、splice、sort、reverse
:::

:::tip 问题补充：vue2有哪些不足：
- 对象新增属性、删除属性，需要使用Vue.set、Vue.delete
- 不能监听数组下标的变化，需要使用Vue.set
- 不能监听对象属性的删除，需要使用Vue.delete
:::