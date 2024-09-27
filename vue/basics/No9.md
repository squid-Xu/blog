# Vue3中toRef和toRefs的区别

- toRef: 基于响应式对象上的一个属性，创建一个对应的 ref。

- toRefs: 将一个响应式对象转换为一个普通对象，这个普通对象的每个属性都是指向源对象相应属性的 ref。每个ref都是toRef创建的

```js
const data = reactive({
    count: 3,
    age: 18
})
const count = toRef(data, 'count') // data.count === count.value
console.log(count.value === data.count) // true

const name = toRef('squid-xu') // 等价于 ref('squid-xu')

const { count: count2, age } = toRefs(data)
console.log(count2.value === data.count) // true
console.log(age.value === data.age) // true
```

- 当我们使用reactive声明了一个对象，在模板中想直接访问属性时，toRefs是个很好的选择

```js

<script>
export default {
  setup() {
    const data = reactive({
      count: 3,
      age: 18
    })
    return {
      ...toRefs(data)
    }
  }
    
}
</script>
```