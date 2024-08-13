# 家族图谱

> 朋友做一个小程序，其中有一个页面是画一个家族的图谱，给我一张图，让我帮他搞一下，于是就有了接下来的这个demo

![微信图片_20240813150509](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240813/微信图片_20240813150509.41xz6h2rao.webp)


## 思路

- 首先想到的是组件递归

:::tip 递归组件
因为自动组件名推断的缘故，一个单文件组件可以通过它的文件名被其自己所引用。例如：名为 `FamilyTree.vue` 的组件可以在其模板中用 `<FamilyTree/>` 引用它自己。
::::


- 定义数据结构

> 单个对象有：姓名和照片，下级就用 `children` 无线嵌套，配偶用 `mate`数组，(可以填写多个配偶~~)

```js
const family = reactive([
  {
    name: '爷爷',
    imgPathUrl: 'http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960',
    mate: [
      {
        name: '奶奶',
        imgPathUrl: "https://static.refined-x.com/static/avatar.jpg"
      }
    ],
    children: [
      {
        name: '儿子',
        imgPathUrl: 'http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960'
      }
    ]
  }
])
```

- 封装组件

> 有了数据结构，使用递归组件把每一层的数据从上到下排列画出来

![微信截图_20240813150603](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240813/微信截图_20240813150603.5xajz3f6we.webp)

- 连线

> 单个对象看做一个整体，每个整体都有一个上下左右的线，然后判断边界隐藏多余的线条、重叠的线条即可。

![微信图片_20240813150518](https://github.com/squid-Xu/picx-images-hosting/raw/master/20240813/微信图片_20240813150518.1vykkpb3jl.webp)

## 完整代码

```js
// 在你的展示页面中引入 FamilyTree.vue 组件

<template>
  <FamilyTree :list="family" />
</template>

<script setup lang="ts">
import FamilyTree from './components/FamilyTree.vue'; // 假设你有一个FamilyTree组件

import { reactive } from 'vue'

const family = reactive([
  {
    name: '爷爷',
    imgPathUrl: 'http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960',
    mate: [
      {
        name: '奶奶',
        imgPathUrl: "https://static.refined-x.com/static/avatar.jpg"
      }
    ],
    children: [
      {
        name: '大伯',
        imgPathUrl: 'http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960',
        children: [
          {
            name: '儿子',
            imgPathUrl: 'http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960',
          },
          {
            name: '女儿',
            imgPathUrl: 'http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960',
          },
        ]
      },
      {
        name: '父亲',
        imgPathUrl: 'http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960',
        mate: [
          {
            name: '母亲',
            imgPathUrl: "https://static.refined-x.com/static/avatar.jpg"
          }
        ],
        children: [
          {
            name: '大哥',
            imgPathUrl: 'http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960',
            children: [
              {
                name: '儿子',
                imgPathUrl: 'http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960',
              },
              {
                name: '女儿',
                imgPathUrl: 'http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960',
              }
            ]
          },
          {
            name: '自己',
            imgPathUrl: 'http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960',
            children: [
              {
                name: '大女儿',
                imgPathUrl: 'http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960',
              },
              {
                name: '小女儿',
                imgPathUrl: 'http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960',
              },
              {
                name: '儿子',
                imgPathUrl: 'http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960',
                children: [
                  {
                    name: '孙子一',
                    imgPathUrl: 'http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960',
                  },
                  {
                    name: '孙子二',
                    imgPathUrl: 'http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960',
                  },
                  {
                    name: '孙子三',
                    imgPathUrl: 'http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960',
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: '姑姑',
        imgPathUrl: 'http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960',
      },
    ]
  }
])
</script>
```

### FamilyTree.vue 组件

```js
<template>
    <div class="container">
        <div v-for="(item, index) in list" :key="index" class="main"
            :class="{ rightLine: !(index == num - 1) && num, leftLine: index > 0 }">
            <div class="box" :class="{ downLine: item?.children?.length, upLine: shang }">
                <div class="personnel">
                    <!-- 男性人员 -->
                    <div class="male" @click="nodePeople(item)">
                        <img class="avatar" :src="item.imgPathUrl">
                        <div class="title">{{ item.name }}</div>
                    </div>
                    <!-- 女性人员，可多个 -->
                    <template v-if="Array.isArray(item.mate) && item.mate.length">
                        <div class="female" v-for="(mate, mateIndex) in item.mate" :key="mateIndex"
                            @click="nodePeople(mate)">
                            <img class="avatar" :src="mate.imgPathUrl">
                            <div class="title">{{ mate.name }}</div>
                        </div>
                    </template>
                </div>
            </div>
            <!-- 递归遍历 -->
            <template v-if="item?.children?.length">
                <FamilyTree :list="item.children" shang :num="item.children.length">
                </FamilyTree>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
defineProps({
    list: {
        type: Array,
        default: () => []
    },
    shang: {
        type: Boolean,
        default: false
    },
    num: {
        type: Number,
        default: 0
    },
})

const nodePeople = (item) => {
    alert(item.name)
}


</script>

<style>
.container {
    display: flex;
    justify-content: center;
}

.main {
    position: relative;
}

.box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px;
}

.personnel {
    display: flex;
}

.male,
.female {
    display: flex;
    flex-direction: column;
    margin: 0 10px;
}


.title {
    height: 30px;
    line-height: 30px;
    text-align: center;
}

.avatar {
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    border-radius: 50%;
    border: solid 5px #13e71e;
}


/* 下线条 */
.downLine::after {
    content: '';
    width: 2px;
    height: 30px;
    background-color: #fa0f69;
}


/* 上线条 */
.upLine::before {
    content: '';
    width: 2px;
    height: 30px;
    background-color: #fa0f69;
}

/* 右线条 */
.rightLine::after {
    content: '';
    /* 需要剪去盒子的大小和偏移量 */
    width: 50%;
    height: 2px;
    position: absolute;
    left: 50%;
    top: 0;
    background-color: #fa0f69;
}

/* 左线条 */
.leftLine::before {
    content: '';
    /* 需要剪去盒子的大小和偏移量 */
    width: 50%;
    height: 2px;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #fa0f69;
}
</style>
````