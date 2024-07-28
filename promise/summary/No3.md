# async 和 await

## async 函数

- 1、函数的返回值为 `promise` 对象

- 2、`promise` 对象的结果由 `async` 函数执行的返回值决定

```js
async function main() {
    // 如果返回值是一个非promise类型的数据，结果就是一个成功的promise对象
    // return 1;
    // 如果返回值是一个promise对象，结果根据由返回值决定
    // return new Promise((resolve, reject) => {
    // 	resolve(1);
    // });
    // 抛出异常,结果就是一个失败的promise对象
    throw 'err';
}

let res = main();
console.log(res);
```


## await 表达式

- 1、`await` 右侧的表达式一般为 `promise` 对象，但也可以是其他的值

- 2、如果表达式是 `promise` 对象，`await` 返回的是 `promise` 成功的值

- 3、如果表达式是其他值，直接将此值作为 `await` 的返回值


::: tip 注意
- 1、`await` 必须写在 `async` 函数中，但 `async` 函数中可以没有 `await`
- 2、如果 `await` 的 `promise` 失败了，就会抛出异常，需要通过 `try catch` 捕获异常
:::

```js
async function main() {
    let p = new Promise((resolve, reject) => {
        resolve('ok');
    });
    // 右侧为 promise 的情况
    // let res = await p;
    // console.log(res);
    // 右侧为其他类型的值
    // let res = 10;
    // console.log(res);
    // 如果promise 是失败的情况
    try {
        let res = await p;
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
main();
```