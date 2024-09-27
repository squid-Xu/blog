# Vue中怎么异步加载组件

```js
<template> 
    <MyComponent /> 
</template>
<script setup>
import { defineAsyncComponent } from 'vue'

const MyComponent = defineAsyncComponent(() =>
  import('./components/MyComponent.vue')
)
</script>

```