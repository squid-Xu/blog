# for-await-of 异步迭代

- await可以和for...of循环一起使用，以串行的方式运行异步操作

```js
async function fetchUserData(userId) {
  // 模拟异步操作，比如从服务器获取用户数据
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`User data for ID ${userId}`);
    }, 1000);
  });
}

const userIds = [1, 2, 3];

(async () => {
  for await (const userData of userIds.map(fetchUserData)) {
    console.log(userData);
  }
})();

```