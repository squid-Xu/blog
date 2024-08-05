# const

## 作用
- 声明常量
## 特点
- 1、要赋初始值；(一般常量使用大写)
```js
const A; // error; Missing initializer in const declaration
```
- 2、常量的值不能修改；

```js
const A = 1;
	  A = 2; // error;  Assignment to constant variable.
```

- 3、块儿级作用域;

```js
{
    const A = 1;
}
console.log(A); // error; A is not defined
```

- 4、对于数组和对象的元素修改，不算做对常量的修改，不会报错

```js
const A = ['a', 'b', 'c', 'd'];
A.push('e');
```