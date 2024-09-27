# vue-router用过哪些路由模式？

- hash模式和history模式

## hash模式

- url会带有 /#/pageName

- hash改变不会发起请求

- 通过监听hashchange事件，动态渲染页面

- 兼容性更好

## hash路由简单实现

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>hash</title>
</head>
<body>
    <a href="#/home">Home</a>
    <br>
    <a href="#/about">About</a>
    <br>
  <div id="app">Home Page</div>
  <script>
    const app = document.getElementById('app')

    const router = {
      mode: 'hsash',
      routes: [
        { path: '/home', component: 'Home Page' },
        { path: '/about', component: 'About Page' },
      ]
    }

    window.addEventListener('hashchange', (event) => {
      const path = location.hash.slice(1)
      const route = router.routes.find(r => r.path === path)
      if (route) {
        app.innerHTML = route.component
      }
    })
  </script>
</body>
</html>
```

## history模式

- url更美观

- 更利于SEO

- 通过pushState、popstate事件进行跳转，动态渲染页面

- 部署刷新404问题 需要解决 nginx 配置、或者后端处理

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>History</title>
</head>
<body>
    <button  onclick="goPage('home')">Home</button>
    <br>
    <button onclick="goPage('about')">About</button>
    <br>
  <div id="app">Home Page</div>
  <script>
    const app = document.getElementById('app')

    const router = {
      mode: 'hsash',
      routes: [
        { path: '/home', name: 'home', component: 'Home Page' },
        { path: '/about', name: 'about', component: 'About Page' },
      ]
    }

    function goPage(path) {
      history.pushState(null, '', path)
      const route = router.routes.find(r => r.path === path)
      if (route) {
        app.innerHTML = route.component
      }
      // 阻止浏览器默认行为
      event.preventDefault()
    }

    // window.addEventListener('popstate', (event) => {
    //   // 阻止浏览器默认行为
    //   event.preventDefault()
    // })
  </script>
</body>
</html>
```