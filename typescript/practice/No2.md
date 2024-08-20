# TS中泛型 Record＜string, any＞

### Record

- Record的内部定义，接收两个泛型参数；Record后面的泛型就是对象键和值的类型。

- Record 主要的作用是用来定义对象

```js
const obj: Record<string, string> = {"a": '1'};

// 或者复杂一点的
interface Person {
  name: string;
  age: number;
}
const obj: Record<string, Person> = {"a": { name: 'dj', age: 12 }};
```