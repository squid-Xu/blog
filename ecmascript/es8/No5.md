# 参数列表支持尾逗号

- 函数参数列表最后一个参数后面允许有一个逗号，这在以后添加更多参数时更方便。

```js
function inviteFriends(friend1, friend2, friend3,) {
  console.log("Inviting:", friend1, friend2, friend3);
}

inviteFriends('Alice', 'Bob', 'Charlie',); // 输出: Inviting: Alice Bob Charlie

```