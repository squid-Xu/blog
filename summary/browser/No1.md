# sessionStorage 能在多个标签页之间共享数据吗？

> 看到这个问题的时候，第一反应是肯定不能，查阅资料发现，只回答不能有点不严谨。


## [MDN中的解释](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage)


 `sessionStorage` 属性允许你访问一个，对应当前源的 `session Storage `对象。它与 `localStorage` 相似，不同之处在于 `localStorage` 里面存储的数据没有过期时间设置，而存储在 `sessionStorage` 里面的数据在页面会话结束时会被清除。

 - 页面会话在浏览器打开期间一直保持，并且重新加载或恢复页面仍会保持原来的页面会话。

 - **在新标签或窗口打开一个页面时会复制顶级浏览会话的上下文作为新会话的上下文，这点和 session cookie 的运行方式不同。**

 - 打开多个相同的 URL 的 Tabs 页面，会创建各自的 sessionStorage。

 - 关闭对应浏览器标签或窗口，会清除对应的 sessionStorage。


 ## 实践验证

> 如果只看上面的介绍有点官方，不太好理解，那就自己手动测试一下

### 1、A页面点击超链接跳转到B页面，如果是 `target="_self"`，A刷新到B，A和B共用sessionstorage，肯定影响。

> 跳转是在同一个浏览器tab页面里面进行的，此时不管怎么操作session，在同一个tab里面两个页面的session都是一样的。

- 在A页面通过超链接打开一个新Tab页签B页面

```html
<body>
    <a href="http://127.0.0.1:5501/sessionstorage/b.html" target="_self">打开新TabB页面</a>
    <script>
        window.sessionStorage.setItem('shareData', 'abc');
    </script>
</body>
```

- 然后看到B页面结果

```js
<script>
    console.log(window.sessionStorage.getItem('shareData')); // abc
</script>
```

### 2、A页面点击超链接跳转到B页面，如果是 `target="_blank"`

<br/>
<br/>

#### 1）如果a标签没有`rel="opener"`属性，此时不会携带`session`

- 在A页面通过超链接打开一个新Tab页签B页面

```html
<body>
    <a href="http://127.0.0.1:5501/sessionstorage/b.html" target="_blank">打开新TabB页面</a>
    <script>
        window.sessionStorage.setItem('shareData', 'abc');
    </script>
</body>
```

- 然后看到B页面结果

```js
<script>
    console.log(window.sessionStorage.getItem('shareData'));//null
</script>
```

#### 2）如果a标签有`rel="opener"`属性，则适用前面的原则，A跳到B，B不拷贝A的sessionstorage，互不影响。


- 在A页面通过超链接打开一个新Tab页签B页面

```html
<body>
    <a href="http://127.0.0.1:5501/sessionstorage/b.html" target="_blank" rel="opener">打开新TabB页面</a>
    <script>
        window.sessionStorage.setItem('shareData', 'abc');
    </script>
</body>
```

- 然后看到B页面结果

```js
<script>
    console.log(window.sessionStorage.getItem('shareData')); // abc
</script>
```

### 3、A页面通过window.open跳转到B页面，如果是 `target="_self"`，A刷新到B，A和B共用sessionstorage，肯定影响。

- 在A页面通过window.open打开一个新Tab页签B页面

```html
<script>
    window.sessionStorage.setItem('shareData', 'abc');
    window.open('http://127.0.0.1:5501/sessionstorage/b.html', '_self');
</script>
```

- 然后看到B页面结果

```js
<script>
    console.log(window.sessionStorage.getItem('shareData')); // abc
</script>
```
### 4、A页面通过window.open跳转到B页面，如果是 `target="_blank"`，A跳到B，B拷贝A的sessionstorage，互不影响。

- 在A页面通过window.open打开一个新Tab页签B页面

```html
<script>
    window.sessionStorage.setItem('shareData', 'abc');
    window.open('http://127.0.0.1:5501/sessionstorage/b.html', '_blank');
</script>
```

- 然后看到B页面结果

```js
<script>
    console.log(window.sessionStorage.getItem('shareData')); // abc
</script>
```


::: danger 结论
- `sessionStorage` 不能在多个窗口或标签页之间共享数据,但是当通过 ` window.open` 或超链接打开新页面时(不能是新窗口)，新页面会复制前一页的 `sessionStorage`。

- `windows.open(, ‘_blank’)`: A跳到B，B拷贝A的`sessionstorage`，互不影响。

- `windows.open(, ‘_self’)`: A刷新到B，A和B共用`sessionstorage`，肯定影响。

- `link（‘_blank’）`: A跳到B，B不拷贝A的`sessionstorage`，互不影响。

- `link（‘_self’）`: A刷新到B，A和B共用`sessionstorage`，肯定影响。
:::