# Vue2、Vue3 和 React 中 Diff 算法的区别

### 一句话概括

-   DOM diff 本质上就是在数据响应式的场景下，降低了用户对 DOM 的直接操作。

> [!tip]
>
> -   像 Vue2、Vue3 和 React 底层都有用到 DOM diff，它们的相同点呢，就都是**同级比对**，复杂度差不多；
> -   那不同点呢，一个是指针移动的方向。比如 React 是**仅从左向右移动**的，而 Vue2 是**双端比较**, 也就是指针是两边向中间移动的。而 Vue3 在 Vue2 双端 diff 的基础上，加上了**最长递增子序列优化算法**。
> -   从时间复杂度来说呢，Vue2 应该是比 React 快一倍的，但是 Vue3 在 JS 层，它的复杂度就不是 O(n) 了，而是 O(nlogN) 。
> -   而 Vue3 为什么复杂度更高了呢，因为 Vue3 的核心是为了减少 DOM 的移动，因为在浏览器中 JS 速度是很快的，但是 DOM 的移动是很昂贵的，而且 DOM 渲染速度很慢，很影响性能。
> -   而最长递增子序列这个算法能够让 DOM 最小范围的移动。虽然 JS 复杂度变高了，但是 DOM 移动次数变少了提高了 DOM 的渲染效率以及性能。所以在数据变化比较大的情况下，比较适合用 Vue3 的选型。

## 原理

Vue2 双端交叉指针，新老 Vdom 各有 2 个指针，分别进行头头、尾尾、头尾、尾头优化比较；

Vue3 也是双端快速 diff，新老 Vdom 各有 2 个指针，只比对头头和尾尾，如果能够匹配上，那就跟 2.0 是一致的。

如果没有匹配上，就会触发最长递增子序列的算法计算，就是在新的 Vdom 里面寻找依次递增的元素有哪些，找到之后，这些元素它的顺序就是固定的，去寻找不在这些列表里面的元素。与老的 Vdom 进行比对，再进行移动、删除或者创建；

实际上它的时间复杂度是 O(nlog(n))，但是在 Vue2 里面，它的复杂度是 O(n)。那这么来看，3.0 的复杂度更高了。那为什么要提高复杂度呢？

因为 3.0 核心是为了减少 DOM 的移动，因为在浏览器中 DOM 的移动它是非常昂贵的，但是 JS 损失一点也没关系。所以总体来看，损失了 JS 的性能，但是提升了浏览器 DOM 的渲染效率，总体来说是利大于弊的。

## Vue 3.0 使用的 diff 算法相比 Vue 2.0 中的双端比对有以下优势

-   最长递增子序列算法

> Vue 3.0 的 diff 算法采用了最长递增子序列算法，能够减少不必要的 DOM 操作，提升性能。

-   静态标记

> Vue 3.0 中，编译器会对静态节点进行标记，在更新时可以直接跳过这些静态节点，减少 DOM 操作，提升性能。

-   缓存数组

> Vue 3.0 中每次更新时会将新旧 VNode 数组缓存起来，只对数组中不同的 VNode 进行比对，减少比对次数，提升性能。

-   动态删除操作

> Vue 3.0 中，对于动态删除操作，采用了异步队列的方式进行，能够将多个删除操作合并为一个，减少 DOM 操作，提升性能。

-   总的来说，Vue 3.0 的 diff 算法相比 Vue 2.0 更加高效，能够减少不必要的 DOM 操作，提升应用的性能。
