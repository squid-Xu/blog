# 可选链操作符 Optional chaining

- 层级比较深时，做有无的判断，使用 `?.`

```js
main({
    db: {
        host: '22.22.4.5',
        username: 'root',
    },
});
function main(config) {
    // ES5方法
    const dbhost = config && config.db && config.db.host;
    console.log(dbhost); //22.22.4.5

    // 新特性
    const dbhost1 = config?.db?.host; //省去层层判断
    console.log(dbhost1); //22.22.4.5
}
``
