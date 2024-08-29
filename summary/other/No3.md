# elementPlus el-dropdown组件popperjs本地报警告

- 用 `vue3+elementPlus` 结果使用 `el-dropdown` 组件时报警告了

![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240829/image.54xp3zc9ig.webp)

## 解决方法



```js {4-11}
<el-dropdown
    class="nav-action-item"
    trigger="click"
    :popper-options="{
        modifiers: [
            {
                name: 'computeStyles',
                options: { gpuAcceleration: false, adaptive: false }
            }
        ]
    }"
>
    <div class="flex-center h100% p10px">
        <img :src="avatar" class="rounded-full mr-10px w24px w24px" />
        <span>admin</span>
    </div>
    <template #dropdown>
        <el-dropdown-menu>
            <a target="_blank" href="https://squid-xu.github.io/blog/">
                <el-dropdown-item>项目地址</el-dropdown-item>
            </a>
            <a target="_blank" href="https://squid-xu.github.io/blog/">
                <el-dropdown-item>项目文档</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="logout">注销地址</el-dropdown-item>
        </el-dropdown-menu>
    </template>
</el-dropdown>
```
![image](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240829/image.13lpplhcn8.webp)

## 总结

- 添加上 `adaptive: false` 属性就可以了。在 `Popper.js` 中，`adaptive` 属性是用于修饰符 `computeStyles `的一个选项，用于控制 `Popper` 元素的定位方式。当 `adaptive` 设置为 `true` 时，`Popper` 元素会根据视口的大小和位置自动调整其位置，以确保其在视口内可见。换句话说，`Popper` 元素会自适应视口的大小和位置，以避免被遮挡或溢出视口。

- 如果您禁用了 `adaptive` 选项，`Popper` 元素将不再自适应视口，而是保持固定的位置。这在某些情况下可能会导致` Popper` 元素在视口边缘溢出或被遮挡。

- 因此，根据您的需求和设计，您可以根据具体情况来决定是否使用 `adaptive` 选项来控制` Popper` 元素的定位方式。