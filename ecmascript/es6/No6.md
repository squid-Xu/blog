# 箭头函数


## 作用

- ES6 允许使用【箭头】 （=>）定义函数

## 特点

- 1、`this` 是静态的，`this` 始终指向函数声明时所在作用域下的 `this` 的值


```js {20}
function getName() {
    console.log(this.name);
}
let getName2 = () => {
    console.log(this.name);
};
// 设置 window  对象的 name 属性

window.name = 'squid-Xu';
const obj = {
    name: '你笑个球',
};

// 直接调用
getName(); //squid-Xu
getName2(); //squid-Xu

// call 方法调用

getName.call(obj); //你笑个球
getName2.call(obj); //squid-Xu
```


- 2、不能作为构造实例化对象

```js {7}
let Person = (name, age) => {
    this.name = name;
    this.age = age;
};

let me = new Person('squid-Xu', 30);
console.log(me);  // error ; Person is not a constructor
```

- 3、不能使用 `arguments` 变量

```js
let fn = () => {
    console.log(arguments); // error; arguments is not defined
};

fn(1, 2, 3);
```

- 4、箭头函数的简写

> 省略小括号，当形参有且只有一个的时候

```js
let add = n => {
    return n + n;
};
console.log(add(1)); // 2
```

> 省略{},当代码体只有一条语句的时候,此时return也必须省略
```js
let pow = n => n * n;
console.log(pow(2)); //4
```