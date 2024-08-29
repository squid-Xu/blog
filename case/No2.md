# css实现围绕中心进行圆形旋转

<script lang="ts" setup>
    import circleBall from './components/circle-ball.vue'
</script>

<circle-ball/>

## 代码实现

::: code-group
```html [template]
<template>
    <div class="main">
        <div class="circle full-50"></div>
        <div class="circle full-100">
            <div class="ball"></div>
        </div>
        <div class="circle full-200">
            <div class="ball"></div>
        </div>
        <div class="circle full-300">
            <div class="ball"></div>
        </div>
        <div class="circle full-400">
            <div class="ball"></div>
        </div>
    </div>
</template>
```

```html [scss]
<style lang="scss" scoped>
.main {
    margin: auto;
    width: 500px;
    height: 500px;
    position: relative;

    .circle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
    }

    .ball {
        transform: translateY(-50%);
        margin: 0 auto;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: rgb(128, 7, 209);
    }

    .full-50 {
        width: 50px;
        height: 50px;
        background-color: aquamarine;
    }

    .full-100 {
        width: 100px;
        height: 100px;
        border: solid 2px hotpink;
        animation: spin 1s linear infinite;
    }

    .full-200 {
        width: 200px;
        height: 200px;
        border: solid 2px khaki;
        animation: spin 2s linear infinite;
    }

    .full-300 {
        width: 300px;
        height: 300px;
        border: solid 2px teal;
        animation: spin 4s linear infinite;
    }

    .full-400 {
        width: 400px;
        height: 400px;
        border: solid 2px lawngreen;
        animation: spin 6s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: translate(-50%, -50%) rotate(0);
        }

        100% {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
}
</style>
```
:::