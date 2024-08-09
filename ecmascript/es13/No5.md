# Object.hasOwn()

- `Object.hasOwn()` 方法用于判断某个对象上是否具有某个属性


```js
const person = {
  name: 'squid-Xu',
  age: 18,
}
console.log(Object.hasOwn(person, 'name')) // true
console.log(Object.hasOwn(person, 'sex')) // false
```