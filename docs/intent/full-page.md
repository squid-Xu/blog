## 全屏滚动

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>全屏滚动</title>
    <style>
        * {
            padding: 0 0;
            margin: 0 0;
        }

        .fullPage {
            /* 一定要设置，保证占满 */
            height: 100vh;
            /* 一定要设置，多余的先隐藏 */
            overflow: hidden;
        }

        .fullPageContainer {
            width: 100%;
            height: 100vh;
            transition: all linear 0.5s;
        }

        .section {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            color: #fff;
        }

        .section-1 {
            background-color: #7caf5f;
        }

        .section-2 {
            background-color: #baca6f;
        }

        .section-3 {
            background-color: #88c1db;
        }

        .section-4 {
            background-color: #b585e2;
        }

        .section-5 {
            background-color: #f56464;
        }

        .fp-right {
            position: fixed;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
        }

        ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        li {
            border-radius: 50%;
            height: 6px;
            width: 6px;
            margin: 10px;
            cursor: pointer;
            background: #fff;
            transition: all linear 0.3s;
        }

        li.active {
            height: 12px;
            width: 12px;
            margin: 7px 0;
        }

        li:hover:not(.active) {
            height: 10px;
            width: 10px;
            margin: 8px 0;
        }
    </style>
</head>

<body>
    <div class="fullPage" id="fullPage">
        <div class="fullPageContainer" id="fullPageContainer">
            <div class="section section-1">第一屏</div>
            <div class="section section-2">第二屏</div>
            <div class="section section-3">第三屏</div>
            <div class="section section-4">第四屏</div>
            <div class="section section-5">第五屏</div>
        </div>
        //右侧指示导航
        <div class="fp-right">
            <ul>
                <li class="active"></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
    <script>
        const fullpage = {
            count: 5, // 页面的个数
            current: 1, // 当前的页面编号
            isScrolling: false, // 是否在滚动,是为了防止滚动多页，需要通过一个变量来控制是否滚动
            deltaY: 0, // 返回鼠标滚轮的垂直滚动量，保存的鼠标滚动事件的deleteY,用来判断是往下还是往上滚
        };

        const fullPageDom = document.getElementById('fullPage')
        const fullPageContainerDom = document.getElementById('fullPageContainer')
        const lisDom = document.querySelectorAll('.fp-right li')

        fullPageContainerDom.addEventListener('DOMMouseScroll', mouseWheelHandle)//Firefox的滚轮事件使用 DOMMouseScroll
        fullPageContainerDom.addEventListener('mousewheel', mouseWheelHandle)//其他浏览器的滚轮事件使用 mousewheel
        document.addEventListener('keydown', createKeyDown)//绑定键盘事件

        // 监听键盘事件
        function createKeyDown(e) {
            if (fullpage.isScrolling) {
                // 判断是否可以滚动
                return false;
            }
            if (e.code === 'ArrowUp') {
                pre();
            }
            if (e.code === 'ArrowDown') {
                next();
            }
        }

        // 监听鼠标监听
        function mouseWheelHandle(event) {
            // 添加冒泡阻止
            let evt = event || window.event;
            if (evt.stopPropagation) {
                evt.stopPropagation();
            } else {
                evt.returnValue = false
            }
            if (fullpage.isScrolling) {
                // 判断是否可以滚动
                return false;
            }
            let e = event.originalEvent || event;
            fullpage.deltaY = e.deltaY || e.detail;// Firefox使用detail
            if (fullpage.deltaY > 0) {
                next()
            } else if (fullpage.deltaY < 0) {
                pre()
            }
        }

        // 往下切换
        function next() {
            if (fullpage.current + 1 <= fullpage.count) {
                // 如果当前页面编号+1 小于总个数，则可以执行向下滑动
                fullpage.current += 1;// 页面+1
                move(fullpage.current);// 执行切换
            }
        }

        // 往上切换
        function pre() {
            if (fullpage.current - 1 > 0) {
                // 如果当前页面编号-1 大于0，则可以执行向上滑动
                fullpage.current -= 1; // 页面-1
                move(fullpage.current); // 执行切换
            }
        }

        // 执行切换
        function move(index) {
            fullpage.isScrolling = true; // 为了防止滚动多页，需要通过一个变量来控制是否滚动
            directToMove(index); //执行滚动
            changeColor(index);//改变颜色
            setTimeout(() => {
                //这里的动画是1s执行完，使用setTimeout延迟1s后解锁
                fullpage.isScrolling = false;
            }, 600);
        }

        //执行滚动
        function directToMove(index) {
            let height = fullPageDom.clientHeight;//获取屏幕的宽度
            let scrollHeight = -(index - 1) * height + "px"; // 计算滚动的告诉，是往上滚还往下滚
            fullPageContainerDom.style.transform = `translateY(${scrollHeight})`;
            fullpage.current = index;
        }

        //改变小li颜色
        function changeColor(index) {
            for (var j = 0; j < lisDom.length; j++) {
                lisDom[j].className = ''
            }
            lisDom[index - 1].className = 'active'
        }

        //绑定li点击事件
        for (let i = 0; i < lisDom.length; i++) {
            lisDom[i].onclick = function () {
                if (fullpage.current - 1 !== i) {
                    move(i + 1); // 执行切换
                }
            }
        }
    </script>
</body>

</html>
```


---

## 运行结果

![alt 属性文本](https://squid-xu.github.io/static/picture/2024/01/20240111212904.png)

---

## 例子地址

[https://squid-xu.github.io/static/example/intent/fullPage.html](https://squid-xu.github.io/static/example/intent/fullPage.html)
