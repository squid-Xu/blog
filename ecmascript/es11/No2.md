# String.prototype.matchAll


- 返回结果是可迭代对象

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

const result = str.matchAll(reg);
console.log([...result]);
```
