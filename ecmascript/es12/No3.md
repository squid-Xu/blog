# WeakRefs


- 一般来说，在JavaScript中，对象的引用是强引用的，这意味着只要持有对象的引用，它就不会被垃圾回收。只有当该对象没有任何的强引用时， js引擎垃圾回收器才会销毁该对象并且回收该对象所占的内存空间。


```js
let obj = {a:1, b:2}; // 只要我们访问 obj 对象，这个对象就不会被垃圾回收
```

- 但是 WeakRefs 可以创建一个弱引用，对象的弱引用是指当该对象应该被 js引擎垃圾回收器回收时不会阻止垃圾回收器的回收行为。

- Weakref 实例具有一个方法 deref，该方法返回被引用的原始对象，如果原始对象已被收集，则返回 undefined 对象。

```js
const ref = new WeakRef({ name: 'squid-Xu' });
let obj = ref.deref();
if (obj) {
  console.log(obj.name); // squid-Xu
} 
```

::: warning 注意
正确使用它们需要仔细考虑，如果可能，最好避免使用它们。
:::

