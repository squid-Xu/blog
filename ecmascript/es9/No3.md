# dotAll模式


## 作用

- dot `·` 元字符 除换行符以外的任意单个字符

- 修饰符`s`

## 特点


```js
let str = `
        <ul>
            <li>
                <a>电影1</a>
                <p>上映日期：1992-2-3</p>
            </li>
            <li>
                <a>定影2</a>
                <p>上映日期：2004-3-2</p>
            </li>
        </ul>`;
// 声明正则
const reg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/gs;
let result;
let data = [];
while ((result = reg.exec(str))) {
    data.push({ title: result[1], date: result[2] });
}
console.log(data); // {title: '电影1', date: '上映日期：1992-2-3'} {title: '定影2', date: '上映日期：2004-3-2'}
```