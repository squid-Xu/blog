# Vue3中ref和reactive的区别？

- `ref `和 `reactive` 都是响应式数据的创建

- 参数不同

> - ref 可以传引用数据和基础数据（number、string、Symbol、undefined、null、bigInt、boolean）

> - reactive只能传入引用数据(object、arrary、map...)

- 使用不同

> - ref在js中需要.value,

> - reactive可以直接访问

> - templete中用法一样

- 实现上不同

> - ref如果传入基础数据类型是RefImpl类的get set, 引用数据类型借助reactive,

> - reactive是同Proxy代理对象实现的响应式