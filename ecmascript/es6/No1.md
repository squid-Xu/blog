
# let

## 作用
- 声明变量；
## 特点
- 1、不能重复声明；
```js
let a = 1;
let a = 2; // error , Identifier 'a' has already been declared
```
- 2、块级作用域 全局、函数、eval {}，出了块不被承认；
```js
{
    let a = 1;
}
console.log(a); // error, a is not defined
```
- 3、不存在变量提升(先定义再使用)；
```js
console.log(a); //error, 不存在变量提升
let a = '1';
```
- 4、不影响作用域链；

```js
{
    //不影响作用域链
    let b = '2';
    function fn() {
        console.log(b);
    }
}
fn();
```

