# Vue 生态

<script setup lang="ts">
import Menu from '../components/menu.vue'
import { VUE_DATA, PC_VUE_DATA, H5_VUE_DATA, BU_VUE_DATA } from './data.js'
</script>

## Vue文档

<Menu :list='VUE_DATA' />

## PC端组件库

<Menu :list='PC_VUE_DATA' />


## H5组件库

<Menu :list='H5_VUE_DATA' />

## 业务组件库

<Menu :list='BU_VUE_DATA' />